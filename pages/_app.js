import { DefaultSeo } from 'next-seo';
import '../styles/globals.css';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
