import Link from "next/link";
import styles from "./ProductItem.module.css";

const ProductItem = ({ imageUrl, title, route }) => {
	return (
		<div className={styles.productItem}>
			<img alt={title} src={imageUrl} className={`${styles.image} img-fluid`} />
			<Link href={route}>
				<div className={styles.overlay}>
					<h5 className={styles.title}>{title}</h5>
				</div>
			</Link>
		</div>
	);
};

export default ProductItem;
