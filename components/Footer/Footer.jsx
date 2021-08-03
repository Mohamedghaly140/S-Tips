import Link from "next/link";
import styles from "./Footer.module.css";

// import Logo from '../Logo/Logo';
// import Social from "../Social/Social";

const Footer = props => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4"></div>
					<div className="col-md-4"></div>
				</div>
			</div>
			<div className="d-flex align-items-center justify-content-center py-2">
				<p className="text-white text-center text-capitalize mb-0 py-1">
					Copyright © {new Date().getFullYear().toString()} S-Tips
					AllRightsReserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
