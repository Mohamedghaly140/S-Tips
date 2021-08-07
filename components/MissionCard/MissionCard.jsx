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
				alt={title}
				width={510}
				src={imageUrl}
				placeholder="blur"
				height={height || 190}
				className={styles.image}
			/>
			<h3>{title}</h3>
			{children}
		</div>
	);
};

export default MissionCard;
