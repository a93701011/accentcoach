import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Hamburger from './hamburger';
import Footer from './footer';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const siteTitle = 'Accent Coach'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/accent l.svg" />
        <meta
          name="description"
          content="Learn English American Accent Private Coach"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <Hamburger />
      <h1 className={utilStyles.heading2Xl}>[!!!測試中TEST!!!不要預約不要付款]</h1>
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  )
}
