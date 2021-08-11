import { useState } from "react";
import FormGroup from "../FormGroup/FormGroup";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
	const [contact, setContact] = useState({
		name: "",
		phone: "",
		message: "",
	});

	const { name, phone, message } = contact;

	const inputChangeHandler = event => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	const inputs = [
		{
			label: "name",
			onChange: inputChangeHandler,
			value: name,
			input: true,
			textarea: false,
		},
		{
			label: "phone",
			onChange: inputChangeHandler,
			value: phone,
			input: true,
			textarea: false,
		},
		{
			label: "message",
			onChange: inputChangeHandler,
			value: message,
			input: false,
			textarea: true,
		},
	];

	const onSubmitHandler = event => {
		event.preventDefault();
		console.log(contact);
	};

	return (
		<section>
			<h3 className={styles.title}></h3>
			<form onSubmit={onSubmitHandler} className={styles.contactForm}>
				{inputs.map(item => (
					<FormGroup
						key={item.label}
						value={item.value}
						label={item.label}
						input={item.input}
						textarea={item.textarea}
						onChange={item.onChange}
					/>
				))}
				<button type="submit" className={styles.submit}>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default ContactForm;
