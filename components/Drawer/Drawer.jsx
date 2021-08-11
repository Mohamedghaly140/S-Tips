import Link from "next/link";
import Image from "next/image";
import styles from "./Drawer.module.css";
import NavItem from "../NavItem/NavItem";
import logoBlack from "../../assets/logo_black.png";
import DraweDropdown from "../DrawerDropdown/DraweDropdown";

const Drawer = ({ open, onClose }) => {
	return (
		<aside className={`${styles.drawer} ${open ? styles.open : styles.close}`}>
			<div className={styles.header}>
				<div className={styles.brand}>
					<Link href="/">
						<a>
							<Image width={100} height={40} src={logoBlack} alt="s-tips" />
						</a>
					</Link>
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
				<NavItem onClick={onClose} href="/customers">
					Customers
				</NavItem>
				<NavItem onClick={onClose} href="/industrial">
					Industrial
				</NavItem>
				<NavItem onClick={onClose} href="/real-estate">
					Real Estate
				</NavItem>
				<NavItem onClick={onClose} href="/contact">
					Contact Us
				</NavItem>
			</ul>
		</aside>
	);
};

export default Drawer;
