import Link from "next/link";
import styles from "./AdvantageCard.module.css";

const AdvantageCard = ({ icon, title, description, height, showBtn }) => {
	return (
		<div className={styles.advantageCard}>
			<div className={styles.icon}>{icon}</div>
			<h5 className={styles.title}>{title}</h5>
			<p className={styles.description} style={{ minHeight: height }}>
				{description}
			</p>
			{showBtn && (
				<Link href="/contact">
					<a className={styles.action}>Read More</a>
				</Link>
			)}
		</div>
	);
};

export default AdvantageCard;
