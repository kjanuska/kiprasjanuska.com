import styles from "./Hobby.module.css";

const Hobby = ({ hobby }: any) => {
	return (
		<div className={`${styles.hobby} card`}>
            <div className={styles.info}>
                <p className={styles.title}>{hobby.title}</p>
                <p className={styles.description}>{hobby.description}</p>
                {hobby.social && (
                    <a className={styles.social} target="_blank" href={hobby.social.link}>
                        <img className={styles.icon} src={hobby.social.icon} alt={hobby.social.alt}/>
                        <span>{hobby.social.text}</span>
                    </a>
                )}
            </div>
			<img className={styles.gif} src={hobby.image} alt={hobby.alt} />
		</div>
	);
};

export default Hobby;
