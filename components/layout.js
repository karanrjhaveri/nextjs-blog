import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
// import { NextSEO, DefaultSEO } from 'next-seo'
// import SEO, {siteTitle, name} from '../next-seo.config'
// import SEO from '../next-seo.config'

export const name = 'Karan Jhaveri'
export const siteTitle = 'Next.js Sample Website | Karan Jhaveri'
export const url = 'https://nextjs-blog.karanrjhaveri.now.sh'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* <DefaultSEO {...SEO} /> */}
      {/* <NextSEO config={SEO} /> */}
      {/*<Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@karanrjhaveri" />
        <meta name="twitter:description" content="This is a description" />
        <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />
        <meta name="twitter:app:name:iphone" content="This is App Name" />
        <meta name="twitter:app:id:iphone" content="iphoneAppId" />
        <meta name="twitter:app:name:ipad" content="This is App Name" />
        <meta name="twitter:app:id:ipad" content="ipadAppId" />
        <meta name="twitter:app:name:googleplay" content="This is App Name" />
        <meta name="twitter:app:id:googleplay" content="GplayAppId" />
        <meta name="twitter:app:country" content="India" />
      </Head>*/}
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
