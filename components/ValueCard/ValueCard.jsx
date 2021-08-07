import styles from "./ValuleCard.module.css";

const ValueCard = ({
	title,
	description,
	dark1,
	dark2,
	dark3,
	dark4,
	dark5,
}) => {
	return (
		<div
			className={`${styles.valueCard} ${dark1 && styles.dark1} ${
				dark2 && styles.dark2
			} ${dark3 && styles.dark3} ${dark4 && styles.dark4} ${
				dark5 && styles.dark5
			}`}
		>
			<div className={styles.caption}>
				<h5>{title}</h5>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ValueCard;
