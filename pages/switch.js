import Head from "next/head";
import { Fragment } from "react";
import switch_banner from "../assets/switch_banner.png";
import switchImage from "../assets/switch.jpeg";
import { MdTouchApp } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { SiSmartthings } from "react-icons/si";
import { RiRemoteControlLine } from "react-icons/ri";
import { GrSchedules, GrIntegration } from "react-icons/gr";
import SingleProductPage from "../components/SingleProductPage/SingleProductPage";

const header = {
	title: "Wall-Switch",
	imageUrl: switch_banner,
	description: "Controlling your Home Switches can't be easier.",
};

const features = {
	title: "Features",
	features: [
		{
			id: 1,
			title: "elegent desgin",
			description: "",
			icon: <RiRemoteControlLine size="2.2em" />,
		},
		{
			id: 2,
			title: "wireless control",
			description: "",
			icon: <AiOutlineApi size="2.2em" />,
		},
		{
			id: 3,
			title: "integration with motion detctors",
			description: "",
			icon: <GrIntegration size="2.2em" />,
		},
		{
			id: 4,
			title: "one touch control",
			description: "",
			icon: <MdTouchApp size="2.2em" />,
		},
	],
};

const aboutProduct = {
	imageUrl: switchImage,
	features: [
		{
			id: 1,
			title: "Traditional but Smart",
			description:
				"S-tips smart switch unit is the next generation of traditional wall switches, a smart light switch can turn your fixtures on and off, but because it's linked to the cloud, you can also control it remotely from your phone",
			icon: <SiSmartthings size="2.2em" />,
		},
		{
			id: 2,
			title: "Easy to Schedule",
			description:
				"With S-Tips smart switch unit you can easily schedule its behavior so it can Turn on/off automatically without your interference",
			icon: <GrSchedules size="2.2em" />,
		},
	],
};

const Switch = () => {
	return (
		<Fragment>
			<Head>
				<title>S-Tips | Wall-Switch</title>
				<meta
					name="description"
					content="Controlling your Home Switches can't be easier."
				/>
			</Head>
			<SingleProductPage
				header={header}
				features={features}
				aboutProduct={aboutProduct}
			/>
		</Fragment>
	);
};

export default Switch;
