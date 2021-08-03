import Link from "next/link";
import styles from "./AdvantageCard.module.css";

const AdvantageCard = ({ icon, title, description }) => {
	return (
		<div className={styles.advantageCard}>
			<div className={styles.icon}>{icon && icon()}</div>
			<h5 className={styles.title}>{title}</h5>
			<p className={styles.description}>{description}</p>
			<Link href="/contact">
				<a className={styles.action}>Read More</a>
			</Link>
		</div>
	);
};

export default AdvantageCard;
