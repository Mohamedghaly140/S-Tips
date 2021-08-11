import { useRef } from "react";
import styles from "./Header.module.css";
import mobile from "../../assets/mobile.gif";
import mainBanner from "../../assets/banner1.jpg";

const Header = ({ banner, title, description, showGif }) => {
	const headerRef = useRef();

	const getStrtedHandler = () => {
		window.scrollTo({
			behavior: "smooth",
			top: headerRef.current.clientHeight,
		});
	};

	return (
		<header className={styles.header} ref={headerRef}>
			<img
				src={banner || mainBanner}
				className={`${styles.bannerImage} img-fluid`}
			/>
			<div className={styles.overlay} />
			<div
				className="container position-relative d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap"
				style={{ zIndex: 3 }}
			>
				<div className={styles.caption}>
					<h1 className={styles.title}>{title || "S-TIPS"}</h1>
					<p className={styles.slogan}>
						{description || "The future of homes at a fingertip"}
					</p>
					{/* <button onClick={getStrtedHandler} className={styles.btn}>
						get started now
					</button> */}
				</div>
				{showGif && <img className="img-fluid" src={mobile} alt="mobile" />}
			</div>
		</header>
	);
};

export default Header;
