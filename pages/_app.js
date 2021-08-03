import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Navbar />
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
