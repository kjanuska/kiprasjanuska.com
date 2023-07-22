import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Tooltip } from "react-tooltip";
import projectsData from "../data/projects.json";
import Project from "./components/Project";

const Home: NextPage = () => {
	const [projects, setProjects] = useState(projectsData);

	return (
		<div className={styles.container}>
			<Head>
				<title>Kipras Januska</title>
				<meta name="description" content="Kipras' personal website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div>
					<h1>
						Hi, I'm{" "}
						<span id={styles.name} data-tooltip-id={styles.pronunciation} data-tooltip-content={`Pronounced "Kip-res Jah-new-ska"`}>
							<Tooltip id={styles.pronunciation} />
							Kipras Januska
						</span>
					</h1>
				</div>

				<p>Welcome to my personal website</p>

				<h2>About me</h2>
				<p>I am an undergraduate Computer Science student at the University of Michigan, Ann Arbor.</p>
				<h2>Things I enjoy</h2>
				<table>
					<tbody>
						<tr id={styles.enjoyTable}>
							<th>Cooking</th>
							<th>Discovering new music genres</th>
							<th>Lifting weights</th>
							<th>Playing guitar</th>
						</tr>
					</tbody>
				</table>
				<h3>Projects</h3>
				<div>
					{projects.map((project) => (
						<Project key={project.name} project={project} />
					))}
				</div>
			</main>

			<footer className={styles.footer}>
				<a href="mailto:kjanuska@umich.edu">kjanuska@umich.edu</a>
			</footer>
		</div>
	);
};

export default Home;
