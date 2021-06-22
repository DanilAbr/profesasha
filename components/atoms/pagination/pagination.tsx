import { useState, MouseEvent } from 'react';

interface Props {
  pagesCount: number,
  onPageLinkClick: ( number: number ) => void;
}

export default function Pagination ( props: Props ) {
  const { onPageLinkClick, pagesCount } = props;

  const [ currentPage, setCurrentPage ] = useState(1);

  function handlePageNumberClick( evt: MouseEvent,  number: number ): void {
    evt.preventDefault();
    setCurrentPage(number);
    onPageLinkClick(number);
  }

  function handleButtonBackClick() {
    setCurrentPage( (prev) => {
      onPageLinkClick( prev - 1);
      return prev - 1;
    })
  }

  function handleButtonForwardClick() {
    setCurrentPage( (prev) => {
      onPageLinkClick( prev + 1);
      return prev + 1;
    })
  }

  return (
    <div className='pagination'>
      <a
        className={ `pagination__button-back ${ currentPage === 1 ? 'pagination__button-back--disabled' : '' }` }
        onClick={ handleButtonBackClick }
      >
        <svg width='16' height='15'>
          <use xlinkHref='#icon-toggle-arrow' />
        </svg>
      </a>
      <ul className='pagination__list'>

        { [...new Array( pagesCount )].map(( number, index ) => {
          const pageNumber = index + 1;

          return (
            <li className={ `pagination__item `}>
              <a
                className={ `pagination__link ${ currentPage === pageNumber ? 'pagination__link--active' : ''} `}
                href='#'
                onClick={ (evt) => handlePageNumberClick(evt, pageNumber) }
              >
                { pageNumber }
              </a>
            </li>
          )
        }) }

      </ul>
      <a
        className={ `pagination__button-forward ${ currentPage === pagesCount ? 'pagination__button-forward--disabled' : '' }` }
        onClick={ handleButtonForwardClick }
      >
        <svg width='16' height='15'>
          <use xlinkHref='#icon-toggle-arrow' />
        </svg>
      </a>
    </div>
  )
}
