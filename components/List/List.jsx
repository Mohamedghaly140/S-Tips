import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./List.module.css";
import { BiRightArrowCircle } from "react-icons/bi";

const List = ({ title, description, subTitle, list }) => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<section className={styles.list}>
			<div className="container pb-5">
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
				<h2 className={styles.subTitle}>{subTitle}</h2>
				<ul>
					{list.map(item => (
						<li
							key={item.title}
							className={`${styles.items} mb-2`}
							data-aos="fade-right"
							data-aos-once="false"
							data-aos-delay={item.delay}
						>
							<BiRightArrowCircle size="1.3em" color="#000" />{" "}
							<span className={`${styles.item} d-block ms-2`}>
								{item.title}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default List;
