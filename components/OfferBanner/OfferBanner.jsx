import Link from "next/link";
import { FiPlayCircle } from "react-icons/fi";
import styles from "./OfferBanner.module.css";

const OfferBanner = ({ title, subTitle }) => {
	return (
		<section className={styles.offer}>
			<div className={styles.overlay}>
				<h5 className={styles.title}>{title}</h5>
				<p className={styles.subTitle}>{subTitle}</p>
				<Link href="/contact">
					<button className={styles.readMore}>
						<FiPlayCircle /> read more
					</button>
				</Link>
			</div>
		</section>
	);
};

export default OfferBanner;
