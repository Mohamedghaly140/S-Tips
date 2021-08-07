import Image from "next/image";
import styles from "./Header.module.css";
import banner from "../../assets/banner1.jpg";

const Header = props => {
	return (
		<header className={styles.header}>
			<Image
				src={props.banner || banner}
				layout="fill"
				alt="banner"
				placeholder="blur"
			/>
			<div className={styles.overlay} />
			<div className="container position-relative" style={{ zIndex: 3 }}>
				<h1 className={styles.title}>S-Tips</h1>
				<p className={styles.slogan}>The future of homes at a fingertip</p>
				<button className={styles.btn}>get started now</button>
			</div>
		</header>
	);
};

export default Header;
