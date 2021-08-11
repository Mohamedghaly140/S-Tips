import styles from "./FormGroup.module.css";

const FormGroup = ({ label, value, onChange, input, textarea }) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor={label} className={styles.label}>
				{label}
			</label>
			{input && (
				<input
					type="text"
					id={label}
					name={label}
					value={value}
					onChange={onChange}
					className={styles.input}
				/>
			)}
			{textarea && (
				<textarea
					cols="30"
					rows="5"
					id={label}
					name={label}
					className={styles.textarea}
				/>
			)}
		</div>
	);
};

export default FormGroup;
