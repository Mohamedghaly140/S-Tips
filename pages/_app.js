import Head from "next/head";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTopIcon from "../components/ScrollToTop/ScrollToTop";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta
					name="description"
					content="S-tips is a leading company in the field of smart home automation. with a professional industrial chain, which has research and development, production, services, and support all in one"
				/>
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
			<ScrollToTopIcon />
		</Fragment>
	);
}

export default MyApp;
