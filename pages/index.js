import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>2.0 Aloha Tech Software</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h2>2.0 Aloha Tech Software</h2>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
