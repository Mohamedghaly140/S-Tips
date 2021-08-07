import Link from "next/link";
import { useState } from "react";
import styles from "./Dropdown.module.css";

const DropdownItem = ({ children, route, onClick }) => {
	return (
		<li className={styles.dropdown__item} onClick={onClick}>
			<Link href={route}>{children}</Link>
		</li>
	);
};

const Dropdown = () => {
	const [open, setOpen] = useState(false);

	const openDropdownHandler = () => {
		setOpen(true);
	};

	const closeDropdownHandler = () => {
		setOpen(false);
	};

	return (
		<div className={styles.dropdown}>
			<button
				className={styles.dropdown__link}
				onMouseEnter={openDropdownHandler}
			>
				Products
			</button>
			{open && (
				<ul
					className={styles.dropdown__menu}
					onMouseLeave={closeDropdownHandler}
				>
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

export default Dropdown;
