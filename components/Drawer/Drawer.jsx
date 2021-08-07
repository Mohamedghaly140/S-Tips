import Link from "next/link";
import styles from "./Drawer.module.css";
import NavItem from "../NavItem/NavItem";
import DraweDropdown from "../DrawerDropdown/DraweDropdown";

const Drawer = ({ open, onClose }) => {
	return (
		<aside className={`${styles.drawer} ${open ? styles.open : styles.close}`}>
			<div className={styles.header}>
				<div className={styles.brand}>
					<Link href="/">S-Tips</Link>
				</div>
			</div>
			<ul className={styles.navList}>
				<NavItem onClick={onClose} href="/">
					Home
				</NavItem>
				<NavItem onClick={onClose} href="/about">
					About
				</NavItem>
				<DraweDropdown onCloseDrawer={onClose} />
				<NavItem onClick={onClose} href="/contact">
					Contact Us
				</NavItem>
			</ul>
		</aside>
	);
};

export default Drawer;
