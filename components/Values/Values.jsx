import ValueItem from "../ValueItem/ValueItem";
import styles from "./Values.module.css";

const Values = ({ title, values }) => {
	return (
		<section className="py-5" style={{ background: "#f5f5f5" }}>
			<h2 className={`${styles.title} mb-4 pt-5 text-center text-dark`}>
				{title}
			</h2>
			<div className="container py-5">
				<div className="row gy-5">
					{values.map(item => (
						<div key={item.id} className="col-6 col-md-4">
							<ValueItem title={item.title} description={item.description} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Values;
