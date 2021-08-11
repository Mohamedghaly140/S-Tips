import ProductItem from "../ProductItem/ProductItem";
import styles from "./Products.module.css";

import p1 from "../../assets/products/01.png";
import p2 from "../../assets/products/02.png";
import p3 from "../../assets/products/05.png";
import p4 from "../../assets/products/06.png";
import p7 from "../../assets/products/07.png";
import p5 from "../../assets/products/08.png";
import p6 from "../../assets/products/10.png";
import p9 from "../../assets/products/09.png";

const items = [
	{ id: 1, title: "IR", imageUrl: p5, route: "/ir" },
	{ id: 2, title: "Panel", imageUrl: p1, route: "/panel" },
	{ id: 3, title: "Switch", imageUrl: p3, route: "/switch" },
	{ id: 4, title: "IR", imageUrl: p6, route: "/ir" },
	{ id: 5, title: "Switch", imageUrl: p4, route: "/switch" },
	{ id: 6, title: "IR", imageUrl: p9, route: "/ir" },
	{ id: 7, title: "Panel", imageUrl: p2, route: "/panel" },
	{ id: 8, title: "Switch", imageUrl: p7, route: "/switch" },
];

const Products = () => {
	return (
		<section className="py-5">
			<div className="pb-5">
				<div className="text-center pb-5">
					<h2 className="text-center text-uppercase">OUR PRODUCTS</h2>
				</div>
				<div className="row gx-0">
					{items.map(item => (
						<div key={item.id} className="col-6 col-sm-4 col-md-3">
							<ProductItem
								title={item.title}
								route={item.route}
								imageUrl={item.imageUrl}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
