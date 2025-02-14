// import { SiteFooter } from '@src/components/SiteFooter';
// import { SiteHeader } from '@src/components/SiteHeader';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SiteHeader } from '../components/SiteHeader';
import '../styles/global/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🌏</text></svg>" />
        <link rel="icon alternate" type="image/png" href="https://twemoji.maxcdn.com/2/72x72/1f30f.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SiteHeader />
      <Component {...pageProps} />
    </>
  );
}
