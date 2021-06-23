import { InView } from 'react-intersection-observer';
import DefaultPage from '../layouts/default-page/default-page';
import OptionCard from "../components/option-card/option-card";
import data from '../staticData/classOptions';
import { CourseType } from './course-info/[id]';
import PageDownButton from '../components/atoms/page-down-button/page-down-button';
import {useCallback, useState} from 'react';

interface NextOption {
  index: number,
  element: Element,
}

interface Props {
  options: Array<CourseType>,
}

export default function ClassOptions() {
  const { options } = data as Props;

  const [ nextOption, setNextOption ] = useState<NextOption>();

  function handleCardInView( status: boolean, entry: IntersectionObserverEntry, index: number ) {
    if ( status ) {
      const nextOptionIndex = (index + 1 >= options.length) ? index : index + 1;

      setNextOption({
        index: nextOptionIndex,
        element: entry.target,
      });
    }
  }

  const scrollToNextOption = useCallback(() => {
    if (nextOption && nextOption.element.nextElementSibling) {
      nextOption.element.nextElementSibling.scrollIntoView({ behavior: 'smooth' })
    }
  }, [nextOption]);

  return (
    <DefaultPage pageModifier='class-options'>
      <section className="class-options">
        <PageDownButton onClick={ scrollToNextOption } />
        <h1 className="class-options__title">Варианты занятий</h1>
        <ul className="class-options__list">

          { options.map((option, index) => {
            return (
              <InView
                key={ option.id }
                onChange={(inView, entry) => handleCardInView( inView, entry, index ) }
                threshold={ 1 }
              >
                {({ ref }) => (
                  <li
                    className="class-options__item"
                    ref={ ref }
                  >
                    <OptionCard
                      isReversed={ index % 2 <= 0 }
                      data={ option }
                    />
                  </li>
                )}
              </InView>
            )
          }) }

        </ul>
      </section>
    </DefaultPage>
  )
}
