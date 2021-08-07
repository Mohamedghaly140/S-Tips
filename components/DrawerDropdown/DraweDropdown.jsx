import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import styles from "./DraweDropdown.module.css";

const DropdownItem = ({ children, route, onClick }) => {
	return (
		<li className={styles.dropdown__item} onClick={onClick}>
			<Link href={route}>{children}</Link>
		</li>
	);
};

const DraweDropdown = ({ onCloseDrawer }) => {
	const [open, setOpen] = useState(false);

	const toggleDropdownHandler = () => {
		setOpen(prevState => !prevState);
	};

	const closeDropdownHandler = () => {
		setOpen(false);
		onCloseDrawer();
	};

	return (
		<div className={styles.dropdown}>
			<button className={styles.dropdown__link} onClick={toggleDropdownHandler}>
				Products{" "}
				{open ? (
					<RiArrowUpSLine size="1.5em" />
				) : (
					<RiArrowDownSLine size="1.5em" />
				)}
			</button>
			{open && (
				<ul className={styles.dropdown__menu}>
					<DropdownItem onClick={closeDropdownHandler} route="/panel">
						Ac-Panel
					</DropdownItem>
					<DropdownItem onClick={closeDropdownHandler} route="/ir">
						Remote-IR
					</DropdownItem>
					<DropdownItem onClick={closeDropdownHandler} route="/switch">
						Wall-Switch
					</DropdownItem>
				</ul>
			)}
		</div>
	);
};

export default DraweDropdown;
