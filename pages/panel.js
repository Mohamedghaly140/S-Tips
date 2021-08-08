import panel from "../assets/panel.jpg";
import acPanel from "../assets/ac-panel.jpg";
import { AiOutlineApi } from "react-icons/ai";
import { MdPhonelinkSetup } from "react-icons/md";
import { GrInstall, GrUpgrade } from "react-icons/gr";
import { IoColorFilterOutline } from "react-icons/io5";
import { FaPowerOff, FaSolarPanel } from "react-icons/fa";
import { RiWirelessChargingFill, RiRemoteControlLine } from "react-icons/ri";
import SingleProductPage from "../components/SingleProductPage/SingleProductPage";

const header = {
	title: "Ac-Panel",
	imageUrl: panel,
	description: "Control your electricity lines from anywhere in the world.",
};

const features = {
	title: "Features",
	features: [
		{
			id: 1,
			title: "lines control",
			description: "",
			icon: <RiRemoteControlLine size="2.2em" />,
		},
		{
			id: 2,
			title: "16/32 channel relay output unit",
			description: "",
			icon: <AiOutlineApi size="2.2em" />,
		},
		{
			id: 3,
			title: "Supports online upgrade",
			description: "",
			icon: <GrUpgrade size="2.2em" />,
		},
		{
			id: 4,
			title: "Mass turn-on/turn-off for all channels",
			description: "",
			icon: <FaPowerOff size="2.2em" />,
		},
		{
			id: 5,
			title: "Wireless Control",
			description: "",
			icon: <RiWirelessChargingFill size="2.2em" />,
		},
		{
			id: 6,
			title: "Easy Installation",
			description: "",
			icon: <GrInstall size="2.2em" />,
		},
		{
			id: 7,
			title: "Stylish look with RGB light system",
			description: "",
			icon: <IoColorFilterOutline size="2.2em" />,
		},
	],
};

const aboutProduct = {
	imageUrl: acPanel,
	features: [
		{
			id: 1,
			title: "Beast Endurance",
			description:
				"S-Tips Ac Panel is designed to resist loads up to 100 mA, so your Appliances Like Air conditions, Refrigerators, Heaters,. Etc are in safe hands",
			icon: <FaSolarPanel size="2.2em" />,
		},
		{
			id: 2,
			title: "easy Installation",
			description:
				"S-Tips Ac Panel is designed to be installed easily over the wall and no need to crack your artistic walls",
			icon: <MdPhonelinkSetup size="2.2em" />,
		},
	],
};

const Panel = () => {
	return (
		<SingleProductPage
			header={header}
			features={features}
			aboutProduct={aboutProduct}
		/>
	);
};

export default Panel;
