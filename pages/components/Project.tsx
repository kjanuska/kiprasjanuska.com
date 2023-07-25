import styles from './Project.module.css';

const Project = ({ project }: any) => {
	return (
		<div className={`${styles.project} card`}>
			<img className={styles.icon} src={project.icon} alt={project.name} />
			<div className={styles.header}>
				<h3 className={styles.name}>{project.name}</h3>
				<p className={styles.languages}>{project.languages.join(", ")}</p>
			</div>
			<p className={styles.description}>{project.description}</p>
		</div>
	);
};

export default Project;
