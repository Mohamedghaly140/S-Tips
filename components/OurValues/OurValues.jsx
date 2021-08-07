import styles from "./OurValues.module.css";
import ValueCard from "../ValueCard/ValueCard";
import SlideItem from "../SlideItem/SlideItem";
import image from "../../assets/sol2.jpg";

const values = [
	{
		id: 1,
		dark1: true,
		dark2: false,
		dark3: false,
		dark4: false,
		title: "Comfort & Luxury",
		description:
			"you do not have to move all over the house to perform various functions. With smart devices, you can perform all household operations through applications while sitting comfortably.",
	},
	{
		id: 2,
		dark1: false,
		dark2: true,
		dark3: false,
		dark4: false,
		title: "Efficient energy utilization",
		description:
			"Integration – within the home automation system – of climate control and lighting enables the optimization of energy consumptions.",
	},
	{
		id: 3,
		dark1: false,
		dark2: false,
		dark3: true,
		dark4: false,
		title: "Remote control",
		description:
			"Remote control lets you operate your home’s systems without cloning yourself.",
	},
	{
		id: 4,
		dark1: false,
		dark2: false,
		dark3: false,
		dark4: true,
		title: "Security",
		description:
			"ncorporate security and surveillance features in your smart home network. Receive security alerts on your various devices depending on the time of day an alert goes off, and monitor activities in real-time whether you’re in the house or halfway around the globe",
	},
	{
		id: 5,
		dark1: false,
		dark2: false,
		dark3: false,
		dark4: false,
		dark5: true,
		title: "Easy installation",
		description:
			"Using a twisted pair for the control system and “classic” wires for the power system everything becomes easier, even the management. ",
	},
];

const OurValues = () => {
	return (
		<section className={`${styles.ourVlaues} py-5`}>
			<div className="row gx-0">
				<div className="col-md-12">
					<SlideItem
						center
						imageUrl={image}
						title="Change your life by connecting everything"
						description="connect all your physical and digital things all in one place so  that give you full control of nearly everything at home—no matter where you may be"
					/>
				</div>
				{values.map(item => (
					<div key={item.id} className="col-md">
						<ValueCard
							dark1={item.dark1}
							dark2={item.dark2}
							dark3={item.dark3}
							dark4={item.dark4}
							dark5={item.dark5}
							title={item.title}
							description={item.description}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurValues;
