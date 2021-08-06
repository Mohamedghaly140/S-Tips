import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import NavItem from "../NavItem/NavItem";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Drawer from "../Drawer/Drawer";
import Backdrop from "../Backdrop/Backdrop";

const Navbar = props => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(false);

	const toggleDrawerHandler = () => {
		setOpen(prevState => !prevState);
	};

	const updateHeightHandler = () => {
		window.scrollY >= 80 ? setActive(true) : setActive(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", updateHeightHandler);

		return () => {
			window.removeEventListener("scroll", updateHeightHandler);
		};
	}, []);

	return (
		<Fragment>
			<nav className={`${styles.navbar} ${active && styles.active}`}>
				<div className={`${styles.container} container`}>
					<Link href="/">
						<a className={styles.brand}>S-Tips</a>
					</Link>
					<HamburgerMenu
						open={open}
						active={active}
						onOpenMenu={toggleDrawerHandler}
					/>
					<ul className={styles.navList}>
						<NavItem href="/">Home</NavItem>
						<NavItem href="/about">About</NavItem>
						<NavItem href="/products">Products</NavItem>
						<NavItem href="/contact">Contact Us</NavItem>
					</ul>
				</div>
			</nav>
			<Drawer open={open} onClose={toggleDrawerHandler} />
			<Backdrop open={open} onClose={toggleDrawerHandler} />
		</Fragment>
	);
};

export default Navbar;
