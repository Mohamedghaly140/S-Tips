import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./ValueItem.module.css";

const ValueItem = ({ icon, title, description }) => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<div className={styles.valueItem} data-aos="fade-up" data-aos-once="false">
			<div className={styles.icon}>{icon}</div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default ValueItem;
