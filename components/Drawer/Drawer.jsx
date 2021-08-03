import styles from "./Drawer.module.css";

const Drawer = ({ open }) => {
	return (
		<aside
			className={`${styles.drawer} ${open ? styles.open : styles.close}`}
		></aside>
	);
};

export default Drawer;
