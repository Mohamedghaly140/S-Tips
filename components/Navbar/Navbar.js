import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import NavItem from "../NavItem/NavItem";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Drawer from "../Drawer/Drawer";
import Backdrop from "../Backdrop/Backdrop";
import Dropdown from "../Dropdown/Dropdown";
import logoWhite from "../../assets/logo_white.png";
import logoBlack from "../../assets/logo_black.png";

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
						<a
							className={`${styles.brand} d-flex align-items-center justify-content-center`}
						>
							<Image
								width={100}
								height={45}
								src={active ? logoBlack : logoWhite}
								alt="s-tips"
							/>
						</a>
					</Link>
					<HamburgerMenu
						open={open}
						active={active}
						onOpenMenu={toggleDrawerHandler}
					/>
					<ul className={styles.navList}>
						<NavItem href="/">Home</NavItem>
						<NavItem href="/about">About</NavItem>
						<Dropdown active={active} />
						<NavItem href="/customers">Customers</NavItem>
						<NavItem href="/industrial">Industrial</NavItem>
						<NavItem href="/real-estate">Real Estate</NavItem>
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
