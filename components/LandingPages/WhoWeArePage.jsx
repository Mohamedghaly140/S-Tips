import { Fragment } from "react";
import Image from "next/image";
import { FiPlayCircle } from "react-icons/fi";
import styles from "./WhoWeArePage.module.css";
import sectionImage from "../../assets/who_we.png";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import { SiSmartthings } from "react-icons/si";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RiWirelessChargingLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import MissionCard from "../MissionCard/MissionCard";
import bicycle from "../../assets/bicycle.jpg";
import mission from "../../assets/mission.jpg";

const WhoWeArePage = () => {
	return (
		<Fragment>
			<section className="py-5">
				<div className="container py-5">
					<div className="row py-5">
						<div className="col-md-6">
							<img
								width={660}
								height={900}
								alt="Who We Are"
								placeholder="blur"
								src={sectionImage}
							/>
						</div>
						<div className="col-md-6 d-flex align-items-center justify-content-start">
							<div>
								<h4 className={styles.title}>Who we are</h4>
								<p className={styles.description}>
									S-tips is a leading company in the field of smart home
									automation. with a professional industrial chain, which has
									research and development, production, services, and support
									all in one. We design, supply, and install control systems
									that bring everything together under a single, simple-to-use
									interface, to make it easy to obtain luxury, comfort, and
									efficiency for homes from anywhere efficiently.
								</p>
								<button className={styles.readMore}>
									<FiPlayCircle /> read more
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={`${styles.section} py-5`}>
				<div className="container py-5">
					<h2 className="text-center text-uppercase mb-5">
						WHAT MAKES US DIFFERENT
					</h2>
					<div className="row py-4">
						<div className="col-md-3">
							<AdvantageCard
								title="Smarthome Ecosystem"
								description={`Continuous integration with third-party products and devices to
                provide a wide range of functionality, new marketing channels
                and a massive competitive advantage
                `}
								icon={<SiSmartthings size="2.2em" />}
							/>
						</div>
						<div className="col-md-3">
							<AdvantageCard
								title="Online/Offline"
								description={`Internet connectivity is no longer an issue. Offline functionality features ensure high system reliability and customer satisfaction`}
								icon={<HiOutlineStatusOnline size="2.2em" />}
							/>
						</div>
						<div className="col-md-3">
							<AdvantageCard
								title="Wireless system"
								description={`Wireless systems make the installation process easier, less
                money- and time-consuming, introduce mobility and have
                minimal requirements
                `}
								icon={<RiWirelessChargingLine size="2.2em" />}
							/>
						</div>
						<div className="col-md-3">
							<AdvantageCard
								title="Mobile App"
								description={`Everything is now connected, controlled, and monitored through
                one mobile application for maximum efficiency and the easiest
                user experience
                `}
								icon={<FaMobileAlt size="2.2em" />}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="py-5">
				<div className="container py-5">
					<h2 className="text-center text-uppercase mb-5">
						Our Vision {"&"} Mission
					</h2>
					<div className="row">
						<div className="col-md-6">
							<MissionCard title="Our Vision" imageUrl={bicycle} height={300}>
								<p>
									One platform that makes it easy to obtain luxury, comfort, and
									efficiency for every home around the globe
								</p>
							</MissionCard>
						</div>
						<div className="col-md-6 mt-5 mt-md-0">
							<MissionCard
								title="Our Mission"
								imageUrl={mission}
								black
								height={300}
							>
								<p>
									To empower users and manufacturers with a platform that
									enhances the lifestyle, cuts costs, and maximizes efficiency
								</p>
							</MissionCard>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default WhoWeArePage;
