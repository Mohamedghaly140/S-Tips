import { Fragment } from "react";
import Header from "../Header/Header";
import Features from "../Features/Features";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const SingleProductPage = props => {
	return (
		<Fragment>
			<Header />
			<Features />
			<WhoWeAre />
		</Fragment>
	);
};

export default SingleProductPage;
