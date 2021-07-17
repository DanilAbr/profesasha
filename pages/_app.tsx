import '../styles/style.scss';
import type { AppProps } from 'next/app';
import { AppWrapper } from '../context/AppContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Head>
        <title>Александра Абрамова - преподаватель испанского языка</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </AppWrapper>
  )
}
export default MyApp
