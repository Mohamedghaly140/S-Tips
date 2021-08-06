import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTopIcon = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", showScrollHandler);

		return () => {
			window.removeEventListener("scroll", showScrollHandler);
		};
	}, []);

	const showScrollHandler = () => {
		if (window.scrollY > 160) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		show && (
			<button
				onClick={scrollToTopHandler}
				className={`${styles.scrolltotop} d-flex justify-content-center align-items-center`}
			>
				<AiOutlineArrowUp size="1.5em" />
			</button>
		)
	);
};

export default ScrollToTopIcon;
