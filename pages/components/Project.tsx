import { useState } from "react";

import styles from "./Project.module.css";
const Project = ({ project }: any) => {
	const [showDemo, setShowDemo] = useState(false);

	return (
		<div className={`${styles.project} project`}>
			<div className={styles.details}>
				<div className={styles.header}>
					<img className={styles.icon} src={project.icon} alt={project.name} />
					<div>
						<h3 className={styles.name}>{project.name}</h3>
						<p>{project.description}</p>
					</div>
				</div>

				<div className={styles.skills}>
					{project.skills.map((skill: string) => (
						<img key={skill} src={`/images/icons/${skill}.png`} alt={skill} className={styles.skill} />
					))}
				</div>
			</div>
			{/* <div className={styles.demoPrompt} onClick={() => (showDemo ? setShowDemo(false) : setShowDemo(true))}>
				<p>View demo</p>
				<svg className={`ui-icon ${showDemo ? styles.flipped : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
					<path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
				</svg>
			</div>
			{showDemo && <div className={styles.demo}>DemoOOO</div>} */}
		</div>
	);
};

export default Project;
