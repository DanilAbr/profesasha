import DefaultPage from '../layouts/default-page/default-page';
import AboutMe from '../components/about-me/about-me';
import FirstScreen from '../components/first-screen/first-screen';
import Link from 'next/link';
import PageDownButton from '../components/atoms/page-down-button/page-down-button';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref: aboutMeRef, inView, entry } = useInView({ threshold: .8 });
  const [ isAboutMeViewed, setAboutMeViewedStatus ] = useState(false);

  function scrollDown() {
    if (entry) {
      entry.target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (entry) {
      if (inView || entry.boundingClientRect.top < 0) {
        setAboutMeViewedStatus(true);
      } else {
        setAboutMeViewedStatus(false);
      }
    }
  }, [ inView ])

  return (
    <DefaultPage pageModifier="index">
      <PageDownButton
        onClick={ scrollDown }
        shouldDisappear={ isAboutMeViewed }
      />
      <div className="index">
        <div className="index__first-screen">
          <FirstScreen />
        </div>
        <div
          className="index__about-me"
          ref={ aboutMeRef }
        >
          <AboutMe />
        </div>
        <div className="index__button-options-wrap">
          <Link href="/class-options">
            <a className="button-primary">Варианты занятий</a>
          </Link>
        </div>
      </div>
    </DefaultPage>
  )
}
