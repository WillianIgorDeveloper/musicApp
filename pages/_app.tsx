import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import styles from '../styles/app.module.scss'
import Player from '../components/player/Player'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <title>MusicApp | Aplicativo para ouvir música</title>
      </Head>

      <div className={styles.page}>
        <div className={styles.upContainer}>
          {/* NavegationBar */}
          <div className={styles.mainContainer}>
            <Component {...pageProps} />
          </div>
        </div>
        <Player />
      </div>
    </>
  )
}