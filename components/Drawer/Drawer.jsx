import Link from "next/link";
import styles from "./Drawer.module.css";
import NavItem from "../NavItem/NavItem";

const Drawer = ({ open, onClose }) => {
	return (
		<aside className={`${styles.drawer} ${open ? styles.open : styles.close}`}>
			<div className={styles.header}>
				<div className={styles.brand}>
					<Link href="/">S-Tips</Link>
				</div>
			</div>
			<ul className={styles.navList}>
				<NavItem href="/">Home</NavItem>
				<NavItem href="/about">About</NavItem>
				<NavItem href="/products">Products</NavItem>
				<NavItem href="/contact">Contact Us</NavItem>
			</ul>
		</aside>
	);
};

export default Drawer;
