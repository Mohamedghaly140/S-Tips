import Image from "next/image";
import styles from "./BusinessCard.module.css";

const BusinessCard = ({ title, imageUrl, subTitle }) => {
	return (
		<div className={styles.businessCard}>
			<Image
				alt={title}
				layout="fill"
				src={imageUrl}
				placeholder="blur"
				className={styles.image}
			/>
			<div className={styles.overlay}>
				<h6 className={styles.title}>{title}</h6>
				<p className={styles.subTitle}>{subTitle}</p>
			</div>
		</div>
	);
};

export default BusinessCard;
