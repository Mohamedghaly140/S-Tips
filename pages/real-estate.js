import Head from "next/head";
import { Fragment } from "react";
import List from "../components/List/List";
import { getData } from "../helper/getData";
import Slider from "../components/Slider/Slider";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import PowerfulSolutions from "../components/PowerfulSolutions/PowerfulSolutions";

export default function RealEstate(props) {
	const { slides, offer, list } = props;

	return (
		<Fragment>
			<Head>
				<title>S-Tips | Real Estate</title>
				<meta
					name="description"
					content="Sell more homes and set yourself apart from the competition by offering your clients technology that provides them with home safety and security, energy-saving, and comfortable living"
				/>
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
}

export async function getStaticProps() {
	const data = await getData("real-estate");

	return {
		props: {
			slides: data.slides,
			offer: data.offer,
			list: data.list,
		},
	};
}
