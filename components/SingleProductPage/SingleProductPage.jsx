import { Fragment } from "react";
import Header from "../Header/Header";
import Features from "../Features/Features";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const SingleProductPage = props => {
	const { header, features, aboutProduct } = props;

	return (
		<Fragment>
			<Header
				title={header.title}
				banner={header.imageUrl}
				description={header.description}
			/>
			<Features features={features.features} title={features.title} />
			<WhoWeAre
				features={aboutProduct.features}
				imageUrl={aboutProduct.imageUrl}
			/>
		</Fragment>
	);
};

export default SingleProductPage;
