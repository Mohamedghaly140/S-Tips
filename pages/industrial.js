import Head from "next/head";
import { Fragment } from "react";
import List from "../components/List/List";
import { getData } from "../helper/getData";
import Slider from "../components/Slider/Slider";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import PowerfulSolutions from "../components/PowerfulSolutions/PowerfulSolutions";

export default function Industrial(props) {
	const { slides, offer, list } = props;

	return (
		<Fragment>
			<Head>
				<title>S-Tips | Industrial</title>
				<meta
					name="description"
					content="We are dedicated to developing complete home automation systems and creative smart products, providing users with a more convenient, comfortable, and secure smart life"
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
	const data = await getData("industrial");

	return {
		props: {
			slides: data.slides,
			offer: data.offer,
			list: data.list,
		},
	};
}
