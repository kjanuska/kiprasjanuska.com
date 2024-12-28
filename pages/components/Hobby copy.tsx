import styles from './Project.module.css';

const Hobby = () => {
	return (
		<div className={styles.hobby}>
			<img className={styles.hobbyGif} src="/images/hobbies/music.gif" alt="Listening to music" />
			<p>Discovering new music genres</p>
			<a target="_blank" href="https://open.spotify.com/user/thefirsttobesecond?si=1caf4195f58d4fec">
				Add me on Spotify <img className={styles.socialIcon} src="/images/hobbies/spotify.png"></img>
			</a>
		</div>
	);
};

export default Hobby;
