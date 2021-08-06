import Link from "next/link";
import styles from "./NavItem.module.css";

const NavItem = ({ children, href, onClick }) => {
	return (
		<li className={styles.navItem} onClick={onClick}>
			<Link className={styles.navLink} href={href}>
				{children}
			</Link>
		</li>
	);
};

export default NavItem;
