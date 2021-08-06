import styles from "./Advantages.module.css";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import { GrIntegration } from "react-icons/gr";
import { IoMdCash } from "react-icons/io";
import { AiOutlineUserSwitch } from "react-icons/ai";

const Advantages = () => {
	return (
		<section className={`${styles.advantages} py-5`}>
			<div className="container py-5">
				<h2 className="text-center text-uppercase mb-5">
					No more worries about
				</h2>
				<div className="row py-3">
					<div className="col-md-4">
						<AdvantageCard
							title="Integration"
							icon={<GrIntegration size="2.2em" />}
							description="Lack of interoperability and integration among commercial products leads to limited functionality"
						/>
					</div>
					<div className="col-md-4">
						<AdvantageCard
							title="High cost"
							icon={<IoMdCash size="2.2em" />}
							description="High installation costs and requirements Fully connected houses cost 2K-150K US$"
						/>
					</div>
					<div className="col-md-4">
						<AdvantageCard
							title="Poor users experience"
							icon={<AiOutlineUserSwitch size="2.2em" />}
							description="Inefficient user experience, long installation time and limited online or offline functionality"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Advantages;
