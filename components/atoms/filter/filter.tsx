import { useState } from 'react';
import useEscKeyListener from '../../../hooks/useEscKeyListener';
import useNonTargetMouseClickListener from "../../../hooks/useNonTargetMouseClickListener";

interface Props {
  initialValue: string,
  values: string[],
  onFilterChange: ( value: string ) => void,
}

export default function Filter(props: Props) {
  const { values, onFilterChange, initialValue } = props;
  const [ activeValue, setActiveValue ] = useState(initialValue);
  const [ isOpen, setOpenStatus ] = useState(false);

  function handleValueChange(value: string): void {
    onFilterChange(value);
    setActiveValue(value);
    setOpenStatus(false);
  }

  useEscKeyListener(() => setOpenStatus(false));
  useNonTargetMouseClickListener(() => setOpenStatus(false), 'filter');

  return (
    <div className={ `filter ${ isOpen ? 'filter--opened' : '' }` }>
      <button
        className='filter__toggle-button'
        aria-label={ `${ isOpen ? 'закрыть' : 'открыть'} фильтр` }
        onClick={ () => setOpenStatus(( prev ) => !prev ) }
      >
        { activeValue }
        <svg width='16' height='15'>
          <use xlinkHref='#icon-toggle-arrow' />
        </svg>
      </button>
      <ul className='filter__options-list'>

        { values
          .filter(( value ) => value !== activeValue )
          .map(( value ) => {
          return (
            <li className='filter__option-item' key={ value }>
              <button
                className='filter__option-picker'
                onClick={ () => handleValueChange(value) }
              >
                { value }
              </button>
            </li>
          )
        }) }

      </ul>
    </div>
  )
}
