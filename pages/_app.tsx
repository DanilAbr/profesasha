import '../styles/style.scss';
import type { AppProps } from 'next/app';
import { AppWrapper } from '../context/AppContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Александра Абрамова - преподаватель испанского языка</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="уроки испанского онлайн, преподаватель испанского языка,  репетитор по испанскому языку, испанский онлайн, подготовка к DELE,  обучение разговорному испанскому, экзаменатор DELE, испанский язык по скайпу"
        />
        <meta
          name="description"
          content="Индивидуальные занятия испанским языком. Подготовка к DELE с аккредитованным Институтом Сервантеса экзаменатором."
        />
        <meta name="google-site-verification" content="439QefqYxXhNGfC-AAE3o0uoI4sOWgmhESqLWOdtcug" />
        <meta name="yandex-verification" content="69e7c42f0b33da4e" />
      </Head>
      <Component { ...pageProps } />
    </AppWrapper>
  )
}

export default MyApp
