import DefaultPage from "../layouts/default-page/default-page";
import AboutMe from "../components/about-me/about-me";
import FirstScreen from "../components/first-screen/first-screen";
import Link from "next/link";
import PageDownButton from '../components/atoms/page-down-button/page-down-button';
import { useEffect, useState} from 'react';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref: aboutMeRef , inView, entry } = useInView({ threshold: .8 });
  const [ isAboutMeViewed, setAboutMeViewedStatus ] = useState(false);

  function scrollDown() {
      if ( entry ) {
        entry.target.scrollIntoView({ behavior: 'smooth' });
      }
  }

  useEffect(() => {
    if (entry) {
      if ( inView || entry.boundingClientRect.top < 0 ) {
        setAboutMeViewedStatus(true);
      } else {
        setAboutMeViewedStatus(false);
      }
    }
  }, [inView])

  return (
    <DefaultPage pageModifier='index'>
      <Head>
        <meta
          name='keywords'
          content={ `уроки испанского онлайн, преподаватель испанского языка,  репетитор по испанскому языку,
            испанский онлайн, подготовка к DELE,  обучение разговорному испанскому, экзаменатор DELE, испанский
            язык по скайпу` }
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <PageDownButton
        onClick={ scrollDown }
        shouldDisappear={ isAboutMeViewed }
      />
      <div className='index'>
        <div className='index__first-screen'>
          <FirstScreen />
        </div>
        <div
          className='index__about-me'
          ref={ aboutMeRef }
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
