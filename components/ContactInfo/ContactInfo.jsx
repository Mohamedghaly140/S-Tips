import Map from "../Map/Map";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
	return (
		<div className={styles.contactInfo}>
			<h3 className={styles.title}>Address Info</h3>
			<h6 className={styles.name}>S-Tips</h6>
			<address className={styles.address}>
				Central area, Above CIB Bank, New Damietta City, Damietta, Egypt
			</address>
			<p className={styles.mail}>Email: info@s-tips.tech</p>
			<p className={styles.mail}>Phone: +020 100 004 0833</p>
			<div>
				<Map />
			</div>
		</div>
	);
};

export default ContactInfo;
