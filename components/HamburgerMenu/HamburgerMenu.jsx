import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ active, open, onOpenMenu }) => {
	return (
		<div
			className={`${styles.menu_btn} ${open && styles.open}`}
			onClick={onOpenMenu}
		>
			<div
				className={`${styles.menu_btn__burger}  ${active && styles.active}`}
			/>
		</div>
	);
};

export default HamburgerMenu;
