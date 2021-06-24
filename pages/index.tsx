import DefaultPage from "../layouts/default-page/default-page";
import AboutMe from "../components/about-me/about-me";
import FirstScreen from "../components/first-screen/first-screen";
import Link from "next/link";
import PageDownButton from '../components/atoms/page-down-button/page-down-button';
import {useRef} from 'react';
import Head from 'next/head';

export default function Home() {
  const aboutMeSection = useRef<HTMLDivElement>(null);

  function scrollDown() {
    if ( aboutMeSection.current ) {
      aboutMeSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <DefaultPage pageModifier='index'>
      <Head>
        <meta
          name='keywords'
          content={ `уроки испанского онлайн, преподаватель испанского языка,
          репетитор по испанскому языку, испанский онлайн, подготовка к DELE по испанскому языку,
          обучение разговорному испанскому ` }
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <PageDownButton onClick={ scrollDown } />
      <div className='index'>
        <div className='index__first-screen'>
          <FirstScreen />
        </div>
        <div
          className='index__about-me'
          ref={ aboutMeSection }
        >
          <AboutMe />
        </div>
        <Link href='/class-options'>
          <a
            className='index__options button-primary'
          >Варианты занятий</a>
        </Link>
      </div>
    </DefaultPage>
  )
}
