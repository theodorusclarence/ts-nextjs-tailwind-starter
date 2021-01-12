import Head from 'next/head';

export default function Seo({ children, pageTitle }) {
    // TODO change this!
    const publicURL = 'https://link.vercel.app';
    return (
        <Head>
            <title>{pageTitle}</title>
            {children}
            <meta property='og:title' content={pageTitle || 'NextJS Tailwind Starter'} />
            <meta property='og:type' content='event' />
            <meta property='og:url' content={publicURL} />
            <meta
                property='og:description'
                content='This starter was made by Theodorus Clarence.'
            />
            <meta property='og:image' content={`${publicURL}/vercel.svg`} />
        </Head>
    );
}
