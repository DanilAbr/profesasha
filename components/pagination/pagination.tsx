import { useState } from 'react';

interface Props {
  pagesCount: number,
  onPageLinkClick: () => void;
}

function getPagesNumberList ( pagesCount ) {

}

export default function Pagination ( props: Props ) {
  const { onPageLinkClick, pagesCount } = props;

  const [ activePage, setActivePage ] = useState(1);

  return (
    <div className='pagination'>
      <ul className='pagination__list'>

        { [...new Array( pagesCount )].map(( number ) => {
          return (
            <li className='pagination__item'>
              <a className='pagination__link' href='#'>
                { number }
              </a>
            </li>
          )
        }) }

      </ul>
    </div>
  )
}
