import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Advantages from "../components/Advantages/Advantages";
import OurSection from "../components/OurSection/OurSection";
import SuccessfulBusiness from "../components/SuccessfulBusiness/SuccessfulBusiness";

import { TiGroup } from "react-icons/ti";
import mobile from "../assets/about_us.jpg";
import { AiFillStar } from "react-icons/ai";

const featurs = [
	{
		id: 1,
		title: "who we are",
		description:
			"We empower users and manufacturers with a platform that enhances the lifestyle, cuts costs, and maximizes efficiency.",
		icon: <TiGroup size="2.2em" />,
	},
	{
		id: 2,
		title: "Why us",
		description:
			"We took an extra step to provide our customers with a home automation solution that combines maximum functionality at the best cost.",
		icon: <AiFillStar size="2.2em" />,
	},
];

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>S-Tips</title>
				<meta
					name="description"
					content="S-tips is a leading company in the field of smart home automation. with a professional industrial chain, which has research and development, production, services, and support all in one"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Advantages />
			<WhoWeAre imageUrl={mobile} features={featurs} width={500} height={400} />
			<SuccessfulBusiness />
			<OurSection />
			<Products />
		</Fragment>
	);
}
