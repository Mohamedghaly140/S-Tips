import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import BusinessCard from "../BusinessCard/BusinessCard";
import styles from "./SuccessfulBusiness.module.css";

const SuccessfulBusiness = () => {
	return (
		<section className={`${styles.successfulBusiness} py-5`}>
			<h2 className="text-center text-uppercase mb-4">
				what we do for successful business
			</h2>
			<div className="container py-5">
				<div className="row">
					<div className="col-md-4">
						<BusinessCard
							title="customers"
							subTitle="Our customers"
							imageUrl={b1}
						/>
					</div>
					<div className="col-md-4 my-5 my-sm-5 my-md-0">
						<BusinessCard
							title="partners"
							subTitle="Our Industrial partners"
							imageUrl={b2}
						/>
					</div>
					<div className="col-md-4">
						<BusinessCard
							title="real estate"
							subTitle="Our real estate partners"
							imageUrl={b3}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SuccessfulBusiness;
