import AdvantageCard from "../AdvantageCard/AdvantageCard";
import styles from "./Features.module.css";

const Features = ({ features, title }) => {
	return (
		<section className={`${styles.features} py-5`}>
			<div className="container py-5">
				<h2 className="text-center text-uppercase mb-5">{title}</h2>
				<div className="row py-3">
					{features.map((item, i) => (
						<div key={i} className="col-6 col-sm-6 col-md-4 my-4">
							<AdvantageCard
								height="auto"
								icon={item.icon}
								title={item.title}
								description={item.description}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
