import ProductItem from "../ProductItem/ProductItem";
import styles from "./Products.module.css";

import ir from "../../assets/ir.jpeg";
import panel from "../../assets/panel.jpg";
import switchI from "../../assets/switch.jpeg";

const items = [
	{ id: 1, title: "IR", imageUrl: ir },
	{ id: 2, title: "Panel", imageUrl: panel },
	{ id: 3, title: "Switch", imageUrl: switchI },
	{ id: 4, title: "IR", imageUrl: ir },
	{ id: 5, title: "Switch", imageUrl: switchI },
	{ id: 6, title: "IR", imageUrl: ir },
	{ id: 7, title: "Panel", imageUrl: panel },
	{ id: 8, title: "Switch", imageUrl: switchI },
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
						<div key={item.id} className="col-md-3">
							<ProductItem imageUrl={item.imageUrl} title={item.title} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
