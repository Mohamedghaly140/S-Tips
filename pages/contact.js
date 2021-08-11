import { Fragment } from "react";
import Header from "../components/Header/Header";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactInfo from "../components/ContactInfo/ContactInfo";

const contact = () => {
	return (
		<Fragment>
			<Header />
			<section className="py-5" style={{ background: "#f5f5f5" }}>
				<div className="container py-5">
					<div className="row">
						<div className="col-md-6">
							<ContactForm />
						</div>
						<div className="col-md-6">
							<ContactInfo />
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default contact;
