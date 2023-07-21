import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Tooltip } from "react-tooltip";

const Home: NextPage = () => {
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
				<h3>Things I enjoy</h3>
				<ul>
					<li>Cooking</li>
					<li>Discovering new music genres</li>
					<li>Lifting weights</li>
					<li>Playing guitar</li>
				</ul>
				<h2>Projects</h2>
				<ul>
					<li>CourseKit</li>
					<li></li>
				</ul>
			</main>

			<footer className={styles.footer}>
				<a href="mailto:kjanuska@umich.edu">kjanuska@umich.edu</a>
			</footer>
		</div>
	);
};

export default Home;
