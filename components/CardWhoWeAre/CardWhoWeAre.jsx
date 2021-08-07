import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styles from "./CardWhoWeAre.module.css";

const CardWhoWeAre = ({ icon, title, description }) => {
	return (
		<div className={styles.CardWhoWeAre}>
			<div className={styles.icon}>{icon}</div>
			<div className={styles.content}>
				<h5 className={styles.title}>{title}</h5>
				<p className={styles.description}>{description}</p>
				<Link href="/contact">
					<a className={styles.action}>
						Read More{" "}
						<span>
							<BsArrowRight size="1.5em" />
						</span>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default CardWhoWeAre;
