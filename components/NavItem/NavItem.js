import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavItem.module.css";

const NavItem = ({ children, href, onClick }) => {
	const router = useRouter();
	const { pathname } = router;

	return (
		<li
			onClick={onClick}
			className={`${styles.navItem} ${pathname === href && styles.active}`}
		>
			<Link className={styles.navLink} href={href}>
				{children}
			</Link>
		</li>
	);
};

export default NavItem;
