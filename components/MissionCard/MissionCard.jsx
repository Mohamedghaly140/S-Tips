import React from "react";
import Image from "next/image";
import styles from "./MissionCard.module.css";

const MissionCard = ({ imageUrl, title, children, black, height, grey }) => {
	return (
		<div
			className={`${styles.missionCard} ${black && styles.blackCard} ${
				grey && styles.greyCard
			}`}
		>
			<Image
				className={styles.image}
				src={imageUrl}
				width={510}
				height={height || 190}
				placeholder="blur"
			/>
			<h3>{title}</h3>
			{children}
		</div>
	);
};

export default MissionCard;
