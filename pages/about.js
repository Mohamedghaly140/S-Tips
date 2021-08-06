import { Fragment } from "react";
import Head from "next/head";
import WhoWeArePage from "../components/LandingPages/WhoWeArePage";

const Who = () => {
	return (
		<Fragment>
			<Head>
				<title>S-Tips | Who we are</title>
				<meta name="description" content="Who we are" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<WhoWeArePage />
		</Fragment>
	);
};

export default Who;
