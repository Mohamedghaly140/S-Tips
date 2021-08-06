import React from "react";
import s1 from "../../assets/sol1.jpg";
import s2 from "../../assets/sol2.jpg";
import s3 from "../../assets/sol3.jpg";
import MissionCard from "../MissionCard/MissionCard";

const PowerfulSolutions = () => {
	return (
		<section className="py-5">
			<div className="container py-5">
				<h2 className="text-center text-uppercase mb-5">
					WE BUILD POWERFUL SOLUTIONS
				</h2>
				<div className="row">
					<div className="col-md-4">
						<MissionCard title="Modular design" imageUrl={s1} height={400} grey>
							<p>Provides customers with a wide range of functionality</p>
							<p>focus on service and customer needs rather than the device</p>
							<p>cut costs of unused functions</p>
						</MissionCard>
					</div>
					<div className="col-md-4 my-5 mt-md-0">
						<MissionCard
							title="Wireless system"
							imageUrl={s2}
							height={400}
							black
						>
							<p>Saves time, effort, and costs</p>
							<p>easy {"&"} less time consuming installation</p>
							<p>fewer requirements</p>
							<p>more functionality -mobility</p>
						</MissionCard>
					</div>
					<div className="col-md-4">
						<MissionCard title="Mobile App" imageUrl={s3} height={400}>
							<p>Makes best of smart home experience</p>
							<p>intuitive UX</p>
							<p>online {"&"} offline</p>
							<p>functionality</p>
							<p>improved customer support</p>
						</MissionCard>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PowerfulSolutions;
