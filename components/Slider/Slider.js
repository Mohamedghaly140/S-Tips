import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from "../SlideItem/SlideItem";

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
		<ReactSlider {...settings} style={{ overflowX: "hidden" }}>
			{slides.map((item, i) => (
				<SlideItem
					key={i}
					showBtn
					title={item.title}
					imageUrl={item.imageUrl}
					description={item.description}
				/>
			))}
		</ReactSlider>
	);
};

export default Slider;
