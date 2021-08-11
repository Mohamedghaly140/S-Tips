import Link from "next/link";
import styles from "./CardAction.module.css";

const CardAction = ({ children, href }) => {
	return (
		<Link href="/contact" className={styles.action}>
			{children}
		</Link>
	);
};

export default CardAction;
