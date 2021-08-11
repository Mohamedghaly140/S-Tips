import Head from "next/head";
import { Fragment } from "react";
import laptop from "../assets/laptop.jpg";
import Slider from "../components/Slider/Slider";
import PowerfulSolutions from "../components/PowerfulSolutions/PowerfulSolutions";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import List from "../components/List/List";

const slides = [
	{
		imageUrl: laptop,
		title: "OUR REAL ESTATE PARTNER",
		description:
			"Sell more homes and set yourself apart from the competition by offering your clients technology that provides them with home safety and security, energy-saving, and comfortable living",
	},
	{
		imageUrl: laptop,
		title: "OUR REAL ESTATE PARTNER",
		description:
			"Sell more homes and set yourself apart from the competition by offering your clients technology that provides them with home safety and security, energy-saving, and comfortable living",
	},
];

const offer = {
	title: "JOIN US",
	subTitle:
		"We are dedicated to developing complete home automation systems and creative smart products, providing users with a more convenient, comfortable, and secure smart life",
};

const list = {
	title: "Our Mobile Application",
	subTitle:
		"Everything is now connected, controlled, and monitored through one mobile application for maximum efficiency and the easiest user experience.",
	description: "Makes best of smart home experience",
	list: [
		{ title: "Intuitive UX" },
		{ title: "Online & Offline" },
		{ title: "Functionality" },
		{ title: "Improved" },
		{ title: "Customer Support" },
	],
};

const RealEstate = () => {
	return (
		<Fragment>
			<Head>
				<title>S-Tips | Real Estate</title>
			</Head>
			<Slider slides={slides} />
			<PowerfulSolutions />
			<OfferBanner title={offer.title} subTitle={offer.subTitle} />
			<List
				list={list.list}
				title={list.title}
				subTitle={list.subTitle}
				description={list.description}
			/>
		</Fragment>
	);
};

export default RealEstate;
