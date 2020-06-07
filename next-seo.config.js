// import { siteTitle, url, name } from './components/layout'
import { NextSeo } from 'next-seo';

export const siteTitle = 'Next.js Sample Website | Karan Jhaveri'
export const url = 'https://nextjs-blog.karanrjhaveri.now.sh'


export default {
        title: siteTitle,
        description: 'SEO made easy for Next.js projects | Learn how to build a personal website using Next.js',
        canonical: url,
        openGraph: {
            type: 'website',
            locale: 'en_IE',
            url: url,
            title: siteTitle,
            description: 'SEO made easy for Next.js projects | Learn how to build a personal website using Next.js',
            // image: `https://og-image.now.sh/${encodeURI(
            //     {siteTitle}
            //   )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
            image: 'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
            site_name: 'karanrjhaveri.now.sh',
            imageWidth: 1200,
            imageHeight: 1200
        },
        twitter: {
            handle: '@karanrjhaveri',
            site: '@karanrjhaveri',
            cardType: 'summary_large_image'
        }
    };