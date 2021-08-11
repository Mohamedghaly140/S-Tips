import { Fragment } from "react";
import laptop from "../assets/laptop.jpg";
import Slider from "../components/Slider/Slider";
import PowerfulSolutions from "../components/PowerfulSolutions/PowerfulSolutions";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import List from "../components/List/List";

const slides = [
	{
		imageUrl: laptop,
		title: "INDUSTRIAL PARTNER Become a partner of S-tips",
		description:
			"We are dedicated to developing complete home automation systems and creative smart products, providing users with a more convenient, comfortable, and secure smart life",
	},
	{
		imageUrl: laptop,
		title: "INDUSTRIAL PARTNER Become a partner of S-tips",
		description:
			"We are dedicated to developing complete home automation systems and creative smart products, providing users with a more convenient, comfortable, and secure smart life",
	},
];

const offer = {
	title: "LOOKING FORWARD TO COOPERATING WITH YOU",
	subTitle:
		"We are dedicated to developing complete home automation systems and creative smart products, providing users with a more convenient, comfortable, and secure smart life",
};

const list = {
	title: "Our platform",
	subTitle:
		"Continuous integration with third-party products and devices to provide a wide range of functionality, new marketing channels and a massive competitive advantage",
	description: "Powerful cloud platform connects all together",
	list: [
		{ title: "Easy integration for third-party products and devices." },
		{ title: "Register, connect, and control devices." },
		{ title: "All devices on one platform Connect" },
	],
};

const Industrial = () => {
	return (
		<Fragment>
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

export default Industrial;
