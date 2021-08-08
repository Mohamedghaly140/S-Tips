import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import WhoWeArePage from "../components/LandingPages/WhoWeArePage";

const Who = () => {
	return (
		<Fragment>
			<Head>
				<title>S-Tips | About</title>
				<meta name="description" content="Who we are" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<WhoWeArePage />
		</Fragment>
	);
};

export default Who;
