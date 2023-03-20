import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...</p>
        <p className={styles.text}>lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...lalala...</p>
        <Link href="/ninjas" legacyBehavior>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
