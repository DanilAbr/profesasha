import DefaultPage from "../layouts/default-page/default-page";
import AboutMe from "../components/about-me/about-me";
import FirstScreen from "../components/first-screen/first-screen";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultPage pageModifier='index'>
      <div className='index'>
        <div className='index__first-screen'>
          <FirstScreen />
        </div>
        <div className='index__about-me'>
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

// TODO: menu esc
