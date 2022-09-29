import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kipras Januska</title>
        <meta name="description" content="Kipras' personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm Kipras
        </h1>

        <p className={styles.description}>
          Welcome to my personal website
        </p>

        <h2>
          About me
        </h2>
        
        <h2>
          Projects
        </h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="mailto:kjanuska@umich.edu"
        >
          kjanuska@umich.edu
        </a>
      </footer>
    </div>
  )
}

export default Home
