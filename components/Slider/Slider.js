import Image from "next/image";
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Slider.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Slider = ({ slides }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	};

	return (
		<ReactSlider {...settings}>
			{slides.map((item, i) => (
				<div className={styles.slide} key={i}>
					<div className={styles.overlay} />
					<Image src={item.imageUrl} layout="fill" placeholder="blur" />
					<div className={`${styles.caption} container`}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.slogan}>{item.description}</p>
						<button className={styles.btn}>get started now</button>
					</div>
				</div>
			))}
		</ReactSlider>
	);
};

export default Slider;
