// import Head from 'next/head'
// import Layout from '../components/layout'
import Layout from '../components/layout'
// import { siteTitle } from '../next-seo.config'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
// import {DefaultSEO} from 'next-seo'
import React from 'react'
import SEO from '../next-seo.config'
import { NextSeo } from 'next-seo'
import { Helmet } from "react-helmet";

const siteTitle = "Next.js Sample Website | Karan Jhaveri"

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      {/* <NextSEO {...SEO} /> */}
      {/* <NextSEO config={SEO} /> */}
      <NextSeo
        title= {siteTitle}
        description="Just your normal About Page"
      />
    {/* <Helmet>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <meta name="keywords" content="HTML,CSS,JavaScript" />
      <meta
        name="description"
        content="About page using react helmet very easy to implement"
      />
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet> */}
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
