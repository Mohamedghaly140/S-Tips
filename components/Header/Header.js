// import Image from "next/image";
import styles from "./Header.module.css";

const Header = props => {
	return (
		<header className={styles.header}>
			<div className="container">
				<h1 className={styles.title}>S-Tips</h1>
				<p className={styles.slogan}>The future of homes at a fingertip</p>
				<button className={styles.btn}>get started now</button>
			</div>
		</header>
	);
};

export default Header;
