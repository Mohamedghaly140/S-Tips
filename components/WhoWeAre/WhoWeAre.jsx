import Image from "next/image";
import { GiDiscussion } from "react-icons/gi";
import { SiTrustpilot } from "react-icons/si";
import laptop from "../../assets/laptop.jpg";
import CardWhoWeAre from "../CardWhoWeAre/CardWhoWeAre";
import styles from "./WhoWeAre.module.css";

const WhoWeAre = () => {
	return (
		<section className={`${styles.whoWeAre} py-5`}>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-7">
						<Image
							src={laptop}
							alt="laptop"
							width={600}
							height={600}
							placeholder="blur"
						/>
					</div>
					<div className="col-md-5">
						<CardWhoWeAre
							title="who we are"
							description="We empower users and manufacturers with a platform that enhances the lifestyle, cuts costs, and maximizes efficiency."
							icon={() => <GiDiscussion size="2.2em" />}
						/>
						<CardWhoWeAre
							title="Why us"
							description="We took an extra step to provide our customers with a home automation solution that combines maximum functionality at the best cost."
							icon={() => <SiTrustpilot size="2.2em" />}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
