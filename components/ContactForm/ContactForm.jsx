import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import FormGroup from "../FormGroup/FormGroup";
import styles from "./ContactForm.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const { name, phone, message, email } = contact;

	const inputChangeHandler = event => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const submitFormHandler = async formData => {
		setIsLoading(true);
		try {
			const { data } = await axios.post(
				"https://http://visionalization.org/api/contact",
				formData
			);
			setIsLoading(false);
			reset();
			toast(data.message);
		} catch (err) {
			setIsLoading(false);
			toast.error(err.response.data.message);
		}
	};

	return (
		<section>
			<h3 className={styles.title}>Contact Us</h3>
			<p className={styles.description}>
				Get in touch we are looking forward to start a project with you
			</p>
			<form
				onSubmit={handleSubmit(submitFormHandler)}
				className={styles.contactForm}
			>
				<FormGroup
					input
					value={name}
					label="name"
					required={errors.name}
					onChange={inputChangeHandler}
					{...register("name", {
						required: "this field requird",
					})}
				/>
				{errors.name && (
					<p
						style={{ fontSize: "14px" }}
						className="mb-0 text-danger text-capitalize p-2"
					>
						{errors.name.message}
					</p>
				)}
				<FormGroup
					input
					value={email}
					label="email"
					required={errors.email}
					onChange={inputChangeHandler}
					{...register("email", {
						required: "this field requird",
						pattern: {
							value: emailRegex,
							message: "Please enter valid email",
						},
					})}
				/>
				{errors.email && (
					<p
						style={{ fontSize: "14px" }}
						className="mb-0 text-danger text-capitalize p-2"
					>
						{errors.name.message}
					</p>
				)}
				<FormGroup
					input
					value={phone}
					label="phone"
					required={errors.phone}
					onChange={inputChangeHandler}
					{...register("phone", {
						required: "this field requird",
					})}
				/>
				{errors.phone && (
					<p
						style={{ fontSize: "14px" }}
						className="mb-0 text-danger text-capitalize p-2"
					>
						{errors.name.message}
					</p>
				)}
				<FormGroup
					textarea
					value={message}
					label="message"
					required={errors.message}
					onChange={inputChangeHandler}
					{...register("message", {
						required: "this field requird",
					})}
				/>
				{errors.message && (
					<p
						style={{ fontSize: "14px" }}
						className="mb-0 text-danger text-capitalize p-2"
					>
						{errors.name.message}
					</p>
				)}
				{isLoading ? (
					<div className="spinner-border" role="status" />
				) : (
					<button type="submit" className={styles.submit}>
						Send Message
					</button>
				)}
			</form>
		</section>
	);
};

export default ContactForm;
