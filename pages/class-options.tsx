import DefaultPage from '../layouts/default-page/default-page';
import OptionCard from "../components/option-card/option-card";
import data from '../staticData/classOptions';

// interface Option {
//   id: number,
//   [key: string]: any
// }

type Option = any;

interface Props {
  options: Array<Option>,
}

export default function ClassOptions() {
  const { options } = data as Props;

  return (
    <DefaultPage pageModifier='class-options'>
      <section className="class-options">
        <h1 className="class-options__title">Варианты занятий</h1>
        <ul className="class-options__list">

          { options.map((option, index) => {
            return (
              <li
                className="class-options__item"
                key={ option.id }
              >
                <OptionCard
                  isReversed={ index % 2 <= 0 }
                  data={ option }
                />
              </li>
            )
          }) }

        </ul>
      </section>
    </DefaultPage>
  )
}
