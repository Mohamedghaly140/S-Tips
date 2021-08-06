import React from "react";
import Image from "next/image";
import styles from "./MissionCard.module.css";

const MissionCard = ({ imageUrl, title, children, black }) => {
	return (
		<div className={`${styles.missionCard} ${black && styles.blackCard}`}>
			<Image
				className={styles.image}
				src={imageUrl}
				width={510}
				height={190}
				placeholder="blur"
			/>
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	);
};

export default MissionCard;
