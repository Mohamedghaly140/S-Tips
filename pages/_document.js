import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
						integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
						crossorigin="anonymous"
						referrerpolicy="no-referrer"
					/>
				</Head>
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
