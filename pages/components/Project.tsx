import styles from './Project.module.css';

const Project = ({ project }: any) => {
	return (
		<div id={styles.card}>
			<h3 id={styles.name}>{project.name}</h3>
			<p>{project.description}</p>
		</div>
	);
};

export default Project;
