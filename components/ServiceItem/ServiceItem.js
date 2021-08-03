import Link from "next/link";
import styles from "./ServiceItem.module.css";

const ServiceItem = () => {
	return (
		<div className={styles.serviceItem}>
			<div className={styles.icon}></div>
			<h5 className={styles.title}></h5>
			<p className={styles.description}></p>
			<Link href="/contact" className={styles.action}></Link>
		</div>
	);
};

export default ServiceItem;
