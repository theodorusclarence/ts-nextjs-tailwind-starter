import { AppProps } from 'next/app';

import '@/styles/globals.css';
// TODO This is for demo purposes, remove this immediately
import '@/styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
