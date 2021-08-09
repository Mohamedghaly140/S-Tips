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
							title="Integration Problems"
							icon={<GrIntegration size="2.2em" />}
							description="Our modular design products are fully connected with the widest range of functionality for every house"
						/>
					</div>
					<div className="col-md-4">
						<AdvantageCard
							title="High cost"
							icon={<IoMdCash size="2.2em" />}
							description="No more expensive requirements for installation or unnecessary features"
						/>
					</div>
					<div className="col-md-4">
						<AdvantageCard
							title="Poor users experience"
							icon={<AiOutlineUserSwitch size="2.2em" />}
							description="Easiest software to manage all your devices at once from one place"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Advantages;
