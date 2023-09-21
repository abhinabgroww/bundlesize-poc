import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Whiskers from '../assets/whiskers.jpeg'


export default function Home() {
  return (
    <>
      <Head>
        <title>BundleSize POC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            FAV KITTY BUR NOT MORE THAN PUSS in BOOTS
          </h1>
          
        </div>
      <br/>
        <div >
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
          <Image
            src={Whiskers}
            className={styles.catImages}
            alt="Whisker Stare"
            />
        </div>
            <br/>
        <button className={styles.likeButton}>
          &lt;3
        </button>
            <br/>
       
      </main>
    </>
  )
}
