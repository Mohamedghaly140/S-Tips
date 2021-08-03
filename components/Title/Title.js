import styles from "./Title.module.css";

const Title = props => {
	return <h5 className={styles.title}>{props.children}</h5>;
};

export default Title;
