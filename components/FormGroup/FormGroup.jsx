import styles from "./FormGroup.module.css";

const Stared = () => (
	<em
		style={{
			color: "#2ecc71",
			fontSize: "12px",
			fontStyle: "normal",
		}}
	>
		*
	</em>
);

const FormGroup = ({
	label,
	value,
	input,
	required,
	onChange,
	textarea,
	...restProps
}) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor={label} className={styles.label}>
				{label} {required && <Stared />}
			</label>
			{input && (
				<input
					type="text"
					id={label}
					name={label}
					value={value}
					{...restProps}
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
					{...restProps}
					className={styles.textarea}
				/>
			)}
		</div>
	);
};

export default FormGroup;
