import Image from "next/image";
import styles from "./SlideItem.module.css";

const SlideItem = ({ imageUrl, title, description, showBtn, center }) => {
	return (
		<div className={styles.slide}>
			<div className={styles.overlay} />
			<Image src={imageUrl} layout="fill" alt={title} />
			<div className={`${styles.caption} container ${center && "text-center"}`}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.slogan}>{description}</p>
				{showBtn && <button className={styles.btn}>get started now</button>}
			</div>
		</div>
	);
};

export default SlideItem;
