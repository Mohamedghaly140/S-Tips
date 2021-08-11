import Image from "next/image";
import laptop from "../../assets/laptop.jpg";
import CardWhoWeAre from "../CardWhoWeAre/CardWhoWeAre";
import styles from "./WhoWeAre.module.css";

const WhoWeAre = ({ imageUrl, features, width, height }) => {
	return (
		<section className={`${styles.whoWeAre} py-5`}>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-7">
						<Image
							alt="laptop"
							width={width}
							height={height}
							// placeholder="blur"
							src={imageUrl || laptop}
						/>
					</div>
					<div className="col-md-5">
						{features.map(item => (
							<CardWhoWeAre
								showBtn
								key={item.id}
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
