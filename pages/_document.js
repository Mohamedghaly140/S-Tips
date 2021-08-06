import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body style={{ overflowX: "hidden" }}>
					<div id="backdrop" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
