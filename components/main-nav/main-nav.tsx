import Link from 'next/link';
import { mainNavItems } from '../../staticData/main-nav';
import { ActionCreator, AppContext } from '../../context/AppContext';
import { useContext } from 'react';

interface Props {
  onItemClick: () => void,
}

export default function MainNav(props: Props) {
  const { onItemClick } = props;
  const { dispatch } = useContext(AppContext);

  function onOpenFormButtonClick() {
    onItemClick();
    dispatch(ActionCreator.openForm());
  }

  return (
    <nav className="main-nav">
      <ul>
        { mainNavItems.map(({ link, name, id }) => (
          <li className="main-nav__item" key={ id }>
            <Link href={ link }>
              <a className="main-nav__link" onClick={ onItemClick }>
                { name }
                <svg className="main-nav__svg" width="14" height="14">
                  <use xlinkHref="#icon-menu-item-arrow" />
                </svg>
              </a>
            </Link>
          </li>
        )) }
      </ul>

      <div className="main-nav__button-to-form-wrap">
        <button
          className="main-nav__link"
          type="button"
          onClick={ onOpenFormButtonClick }
        >
          Связаться со мной
          <svg className="main-nav__svg" width="14" height="14">
            <use xlinkHref="#icon-menu-item-arrow" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
