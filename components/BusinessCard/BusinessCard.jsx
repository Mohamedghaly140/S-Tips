import Link from "next/link";
import { FiPlayCircle } from "react-icons/fi";
import styles from "./BusinessCard.module.css";

const BusinessCard = ({ title, imageUrl, subTitle, route }) => {
	return (
		<div className={styles.businessCard}>
			<img alt={title} src={imageUrl} className={styles.image} />
			<div className={styles.overlay}>
				<h6 className={styles.title}>{title}</h6>
				<p className={styles.subTitle}>{subTitle}</p>
			</div>
			<Link href={route}>
				<button className={styles.readMore}>
					<FiPlayCircle /> read more
				</button>
			</Link>
		</div>
	);
};

export default BusinessCard;
