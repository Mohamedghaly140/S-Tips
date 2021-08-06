import Image from "next/image";
import { useState, Fragment } from "react";
import styles from "./OurSection.module.css";
import platform from "../../assets/platform.jpg";
import mobile from "../../assets/mobile.jpg";

const OurSection = () => {
	const [section, setSection] = useState(1);

	const showPlatformHandler = () => {
		setSection(1);
	};

	const showMobileHandler = () => {
		setSection(2);
	};

	return (
		<section className={`${styles.ourSection} py-5`}>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-2">
						<div className={styles.actions}>
							<button
								className={`${section === 1 && styles.active}`}
								onClick={showPlatformHandler}
							>
								our platform
							</button>
							<button
								className={`${section === 2 && styles.active}`}
								onClick={showMobileHandler}
							>
								our mobile Application
							</button>
						</div>
					</div>
					{section === 1 ? (
						<Fragment>
							<div className="col-md-3">
								<Image
									width={600}
									height={800}
									// layout="fill"
									src={platform}
									placeholder="blur"
									className={styles.image}
									alt="platform"
								/>
							</div>
							<div className="col-md-7">
								<div className={styles.data}>
									<h4 className={styles.title}>our platform</h4>
									{/* <h6 className={styles.subTitle}></h6> */}
									<p className={styles.description}>
										Continuous integration with third-party products and devices
										to provide a wide range of functionality, new marketing
										channels and a massive competitive advantage.
									</p>
									<button className={styles.readMore}>Read More</button>
								</div>
							</div>
						</Fragment>
					) : (
						<Fragment>
							<div className="col-md-3">
								<Image
									width={600}
									height={800}
									// layout="fill"
									src={mobile}
									placeholder="blur"
									className={styles.image}
									alt="mobile"
								/>
							</div>
							<div className="col-md-7">
								<div className={styles.data}>
									<h4 className={styles.title}>our mobile Application</h4>
									<h6 className={styles.subTitle}>
										everything at your home is now connected
									</h6>
									<p className={styles.description}>
										one mobile application for maximum efficiency and the
										easiest user experience from anywhere.
									</p>
									<ul className={styles.list}>
										<li>monitor</li>
										<li>Secure</li>
										<li>control</li>
										<li>automate</li>
									</ul>
									<button className={styles.readMore}>Read More</button>
								</div>
							</div>
						</Fragment>
					)}
				</div>
			</div>
		</section>
	);
};

export default OurSection;
