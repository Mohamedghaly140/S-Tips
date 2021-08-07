import Image from "next/image";
import styles from "./Header.module.css";
import mainBanner from "../../assets/banner1.jpg";
import mobile from "../../assets/mobile.gif";

const Header = ({ banner, title, description, showGif }) => {
	return (
		<header className={styles.header}>
			<Image
				layout="fill"
				alt="banner"
				placeholder="blur"
				src={banner || mainBanner}
				className={styles.bannerImage}
			/>
			<div className={styles.overlay} />
			<div
				className="container position-relative d-flex align-items-center justify-content-center justify-content-lg-between flex-wrap"
				style={{ zIndex: 3 }}
			>
				<div className={styles.caption}>
					<h1 className={styles.title}>{title || "S-Tips"}</h1>
					<p className={styles.slogan}>
						{description || "The future of homes at a fingertip"}
					</p>
					<button className={styles.btn}>get started now</button>
				</div>
				{showGif && (
					<Image width={580} height={380} src={mobile} alt="mobile" />
				)}
			</div>
		</header>
	);
};

export default Header;
