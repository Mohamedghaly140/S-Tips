import styles from "./ValueItem.module.css";

const ValueItem = ({ icon, title, description }) => {
	return (
		<div className={styles.valueItem}>
			<div className={styles.icon}>{icon}</div>
			<h4 className={styles.title}>{title}</h4>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default ValueItem;
