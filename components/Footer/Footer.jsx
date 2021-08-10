import Link from "next/link";
import styles from "./Footer.module.css";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// import Logo from '../Logo/Logo';
// import Social from "../Social/Social";

const ListItem = ({ children, route }) => {
	return (
		<li>
			<RiArrowDropRightLine size="1.2em" />
			<Link href={route}>
				<a className={styles.link}>{children}</a>
			</Link>
		</li>
	);
};

const SocialItem = ({ children, link }) => {
	return (
		<li>
			<a href={link}>{children}</a>
		</li>
	);
};

const Footer = props => {
	return (
		<footer className={styles.footer}>
			<div className="container py-5">
				<div className="row py-5">
					<div className="col-md-4">
						<h5 className={styles.title}>S-Tips</h5>
						<p>
						S-tips is a leading company in the field of smart home automation. 
						with a professional industrial chain, which has research and development, 
						production, services, and support all in one. We design, supply, 
						and install control systems that bring everything together under a single, 
						simple-to-use interface, to make it easy to obtain luxury, comfort, and efficiency 
						for homes from anywhere efficiently.
						</p>
						<p></p>
					</div>
					<div className="col-md-4 my-5 my-sm-5 my-md-0">
						<h5 className={styles.title}>About Us</h5>
						<ul className={styles.list}>
							<ListItem route="/home">Home</ListItem>
							<ListItem route="/about">About</ListItem>
							<ListItem route="/products">Products</ListItem>
							<ListItem route="/contact">Contact</ListItem>
						</ul>
					</div>
					<div className="col-md-4">
						<h5 className={styles.title}>Contact Us</h5>
						<h6 className={styles.subTitle}>Address:</h6>
						<p>No.28 - 63739 street lorem ipsum, ipsum City, Country</p>
						<ul className={styles.contactList}>
							<li>
								<h6 className={styles.subTitle}>Phone:</h6>
								<p>+ 1 (234) 567 8901</p>
							</li>
							<li>
								<h6 className={styles.subTitle}>Email:</h6>
								<p>support@yoursite.com</p>
							</li>
							<li>
								<h6 className={styles.subTitle}>Fax:</h6>
								<p>+ 1 (234) 567 8901</p>
							</li>
						</ul>
						<ul className={styles.socialLinks}>
							<SocialItem link="#">
								<FaFacebookF />
							</SocialItem>
							<SocialItem link="#">
								<FaTwitter />
							</SocialItem>
							<SocialItem link="#">
								<FaLinkedinIn />
							</SocialItem>
						</ul>
					</div>
				</div>
			</div>
			<div
				className={`${styles.copyRight}  d-flex align-items-center justify-content-center py-2`}
			>
				<p className="text-white text-center text-capitalize mb-0 py-1">
					Copyright © {new Date().getFullYear().toString()} S-Tips All Rights
					Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
