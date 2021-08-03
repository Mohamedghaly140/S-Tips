import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components/macro';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ErrorMessage from '../../components/Message/Message';

const SubmitButton = styled(Button)`
	box-shadow: 0px 0px 4px 1px #f9b024;
	background: linear-gradient(#fcbb29, #f9b024, #f4a31d);
	padding: 0.5rem 1rem;
	border-radius: 10px;
	border: none;
	color: #444;
	font-weight: 500;
`;

const ContactFormFooter = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);

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
				'https://vts-contact-api.herokuapp.com/api/contact',
				formData
			);
			setIsLoading(false);
			reset();
			toast(data.message);
		} catch (err) {
			toast.error(err.response.data.message);
			setIsLoading(false);
		}
	};

	return (
		<>
			<Form className="w-100" onSubmit={handleSubmit(submitFormHandler)}>
				<Form.Group>
					<Form.Control
						type="text"
						name="name"
						placeholder={t('Forms.YourName')}
						{...register('name', {
							required: t('Error.Requird'),
							minLength: {
								value: 5,
								message: t('Error.MinLength'),
							},
						})}
					/>
					{errors.name && (
						<p className="mb-0 text-danger text-capitalize p-2">
							{errors.name.message}
						</p>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Control
						type="email"
						placeholder={t('Forms.E-Mail')}
						name="email"
						{...register('email', {
							required: t('Error.Requird'),
							pattern: {
								value: emailRegex,
								message: 'Please enter a valid email address',
							},
						})}
					/>
					{errors.email && (
						<p className="mb-0 text-danger text-capitalize p-2">
							{errors.email.message}
						</p>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Control
						name="message"
						as="textarea"
						rows={3}
						placeholder={t('Forms.YourMessage')}
						style={{ resize: 'none' }}
						{...register('message', {
							required: t('Error.Requird'),
							minLength: {
								value: 5,
								message: t('Error.MinLength'),
							},
						})}
					/>
					{errors.message && (
						<p className="mb-0 text-danger text-capitalize p-2">
							{errors.message.message}
						</p>
					)}
				</Form.Group>

				{isLoading ? (
					<Spinner animation="border" role="status" variant="primary" />
				) : (
					<SubmitButton type="submit">{t('Forms.Send')}</SubmitButton>
				)}
			</Form>
		</>
	);
};

export default ContactFormFooter;
