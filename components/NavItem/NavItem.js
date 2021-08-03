import Link from "next/link";
import styles from "./NavItem.module.css";

const NavItem = ({ children, href }) => {
	return (
		<li className={styles.navItem}>
			<Link className={styles.navLink} href={href}>
				{children}
			</Link>
		</li>
	);
};

export default NavItem;
