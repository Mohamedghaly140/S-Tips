import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Backdrop.module.css";

const Backdrop = ({ open, onClose }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return (
		mounted &&
		createPortal(
			<div
				open={open}
				onClick={onClose}
				className={`${styles.backdrop} ${open ? styles.open : styles.close}`}
			/>,
			document.getElementById("backdrop")
		)
	);
};

export default Backdrop;
