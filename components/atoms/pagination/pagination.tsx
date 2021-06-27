import {useState, MouseEvent, useEffect} from 'react';

interface Props {
  pagesCount: number,
  onPageLinkClick: ( number: number ) => void;
}

export default function Pagination ( props: Props ) {
  const { onPageLinkClick, pagesCount } = props;

  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    onPageLinkClick(currentPage);
  }, [ currentPage ])

  function handlePageNumberClick( evt: MouseEvent,  number: number ): void {
    evt.preventDefault();
    setCurrentPage(number);
  }

  return (
    <div className='pagination'>
      <a
        className={ `pagination__button-back ${ currentPage === 1 ? 'pagination__button-back--disabled' : '' }` }
        onClick={ () => setCurrentPage( (prev) => prev - 1 ) }
      >
        <svg width='16' height='15'>
          <use xlinkHref='#icon-toggle-arrow' />
        </svg>
      </a>
      <ul className='pagination__list'>

        { [...new Array( pagesCount )].map(( number, index ) => {
          const pageNumber = index + 1;
          console.log('pagination render');

          return (
            <li className={ `pagination__item `} key={ pageNumber }>
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
        onClick={ () => setCurrentPage( (prev) => prev + 1 ) }
      >
        <svg width='16' height='15'>
          <use xlinkHref='#icon-toggle-arrow' />
        </svg>
      </a>
    </div>
  )
}
