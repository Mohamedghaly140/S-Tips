import Image from "next/image";
import laptop from "../../assets/laptop.jpg";
import CardWhoWeAre from "../CardWhoWeAre/CardWhoWeAre";
import styles from "./WhoWeAre.module.css";

const WhoWeAre = ({ imageUrl, features }) => {
	return (
		<section className={`${styles.whoWeAre} py-5`}>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-7">
						<Image
							src={imageUrl || laptop}
							alt="laptop"
							width={600}
							height={600}
							placeholder="blur"
						/>
					</div>
					<div className="col-md-5">
						{features.map(item => (
							<CardWhoWeAre
								icon={item.icon}
								title={item.title}
								description={item.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
