import { siteTitle, url, name } from '../components/layout'
// export const siteTitle = 'Next.js Sample Website | Karan Jhaveri'
    /* <meta name="og:title" content={siteTitle} />
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
            <meta name="twitter:app:country" content="India" /> */

export default {
    // title: 'Next.js SEO Plugin',
    title: siteTitle,
    description: 'SEO made easy for Next.js projects | Learn how to build a personal website using Next.js',
    canonical: url,
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        // url: 'https://www.garymeehan.ie',
        url: url,
        // title: 'Next.js Seo',
        title: siteTitle,
        description: 'SEO made easy for Next.js projects | Learn how to build a personal website using Next.js',
        image: `https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
        // image: 'https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg',
        site_name: 'karanrjhaveri.now.sh',
        imageWidth: 1200,
        imageHeight: 1200
    },
    twitter: {
        handle: '@karanrjhaveri',
        cardType: 'summary_large_image'
    }
};