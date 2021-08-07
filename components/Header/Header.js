import Image from "next/image";
import styles from "./Header.module.css";
import banner from "../../assets/banner1.jpg";
import mobile from "../../assets/mobile.gif";

const Header = props => {
	return (
		<header className={styles.header}>
			<Image
				layout="fill"
				alt="banner"
				placeholder="blur"
				className={styles.bannerImage}
				src={props.banner || banner}
			/>
			<div className={styles.overlay} />
			<div
				className="container position-relative d-flex align-items-center justify-content-between flex-wrap"
				style={{ zIndex: 3 }}
			>
				<div className={styles.caption}>
					<h1 className={styles.title}>S-Tips</h1>
					<p className={styles.slogan}>The future of homes at a fingertip</p>
					<button className={styles.btn}>get started now</button>
				</div>
				<Image width={480} height={300} src={mobile} alt="mobile" />
			</div>
		</header>
	);
};

export default Header;
