import Head from "next/head";
import { Fragment } from "react";
import panel from "../assets/panel.jpg";
import iRImage from "../assets/ir.jpeg";
import { TiThLarge } from "react-icons/ti";
import { MdPhonelinkSetup } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiRemoteControlLine } from "react-icons/ri";
import { GrInstall, GrUpgrade } from "react-icons/gr";
import { MdSettingsRemote, MdCastConnected } from "react-icons/md";
import SingleProductPage from "../components/SingleProductPage/SingleProductPage";

const header = {
	title: "Remote-IR",
	imageUrl: panel,
	description:
		"Control your television, fan, Air-Codition, heating or any other infrared controlled device through  mobile app with this IR blaster.",
};

const features = {
	title: "Features",
	features: [
		{
			id: 1,
			title: "Remote Control",
			description: "",
			icon: <RiRemoteControlLine size="2.2em" />,
		},
		{
			id: 2,
			title: "Control any IR controlled device",
			description: "",
			icon: <MdCastConnected size="2.2em" />,
		},
		{
			id: 3,
			title: "Supports online upgrade",
			description: "",
			icon: <GrUpgrade size="2.2em" />,
		},
		{
			id: 4,
			title: "Manually learn any unknown IR device",
			description: "",
			icon: <FaChalkboardTeacher size="2.2em" />,
		},
		{
			id: 5,
			title: "Large Database for Brands",
			description: "",
			icon: <TiThLarge size="2.2em" />,
		},
		{
			id: 6,
			title: "Easy Installation",
			description: "",
			icon: <GrInstall size="2.2em" />,
		},
	],
};

const aboutProduct = {
	imageUrl: iRImage,
	features: [
		{
			id: 1,
			title: "One Place to control all devices",
			description:
				"Control your television, fan, air-condition, heating, or any other infrared-controlled device through a mobile app with this IR blaster. Take control of your devices wherever you are in the world and never have to search for the remote control again",
			icon: <MdSettingsRemote size="2.2em" />,
		},
		{
			id: 2,
			title: "Manually learn any unknown IR Remote",
			description:
				"Simply select the device type and brand, have the app search for a compatible remote and done. Is the remote not available on the database list ? No worries, you have the option to manually learn any unknown IR device to also support less known brands or other products. There must be already a no brand fan, heater or other product in your home which can be controlled by this blaster.",
			icon: <MdPhonelinkSetup size="2.2em" />,
		},
	],
};

const IR = () => {
	return (
		<Fragment>
			<Head>
				<title>S-Tips | Remote-IR</title>
				<meta
					name="description"
					content="Control your television, fan, Air-Codition, heating or any other infrared controlled device through  mobile app with this IR blaster."
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

export default IR;
