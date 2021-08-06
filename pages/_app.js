import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTopIcon from "../components/ScrollToTop/ScrollToTop";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Navbar />
			<Header />
			<Component {...pageProps} />
			<Footer />
			<ScrollToTopIcon />
		</Fragment>
	);
}

export default MyApp;
