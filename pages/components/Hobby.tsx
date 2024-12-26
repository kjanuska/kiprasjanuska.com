import styles from "./Hobby.module.css";

const Hobby = ({ hobby }: any) => {
	return (
		<div className={styles.hobby}>
            <img className={styles.image} src={hobby.image} alt={hobby.alt} />
            <div className={styles.info}>
                <p className={styles.title}>{hobby.title}</p>
                <p className={styles.description}>{hobby.description}</p>
            </div>
		</div>
	);
};

export default Hobby;
