import Link from "next/link";
import Image from "next/image";
import styles from "./ProductItem.module.css";

const ProductItem = ({ imageUrl, title, route }) => {
	return (
		<div className={styles.productItem}>
			<Image
				alt={title}
				layout="fill"
				src={imageUrl}
				placeholder="blur"
				className={styles.image}
			/>
			<Link href={route}>
				<div className={styles.overlay}>
					<h5 className={styles.title}>{title}</h5>
				</div>
			</Link>
		</div>
	);
};

export default ProductItem;
