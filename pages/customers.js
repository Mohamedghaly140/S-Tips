import Head from "next/head";
import { Fragment } from "react";
import laptop from "../assets/laptop.jpg";
import OurValues from "../components/OurValues/OurValues";
import PowerfulSolutions from "../components/PowerfulSolutions/PowerfulSolutions";
import Slider from "../components/Slider/Slider";

const slides = [
	{
		imageUrl: laptop,
		title: "S-Tips",
		description:
			"to empower users with a smart home automation system that enhance the lifestyle, cut cost and maximize efficiency",
	},
	{
		imageUrl: laptop,
		title: "S-Tips",
		description:
			"to empower users with a smart home automation system that enhance the lifestyle, cut cost and maximize efficiency",
	},
];

const customers = () => {
	return (
		<Fragment>
			<Head>
				<title>S-Tips | Customers</title>
			</Head>
			<Slider slides={slides} />
			<PowerfulSolutions />
			<OurValues />
		</Fragment>
	);
};

export default customers;
