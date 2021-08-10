import MainNav from '../main-nav/main-nav';
import { useEffect, useState } from 'react';
import useEscKeyListener from '../../hooks/useEscKeyListener';
import useNonTargetMouseClickListener from '../../hooks/useNonTargetMouseClickListener';

export default function PageHeader() {
  const [ isMenuOpened, setMenuStatus ] = useState(false);

  useEscKeyListener(() => setMenuStatus(false));
  useNonTargetMouseClickListener(() => setMenuStatus(false), 'page-header');

  function changeMenuStatus() {
    setMenuStatus((prev) => !prev);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    const html = window.document.documentElement;

    if (body) {
      body.style.overflow = (body.clientWidth < 1000 && isMenuOpened)
        ? 'hidden'
        : 'auto';
      html.style.overflow = (body.clientWidth < 1000 && isMenuOpened)
        ? 'hidden'
        : 'auto';
    }
  }, [ isMenuOpened ]);

  return (
    <header className="page-header">
      <div
        className={ `page-header__menu-pre-wrapper ${ !isMenuOpened ? 'page-header__menu-pre-wrapper--hide' : '' }` }>
        <div className="page-header__menu-wrapper">
          <MainNav onItemClick={ changeMenuStatus } />
        </div>
      </div>

      <div className="page-header__button-wrapper">
        <button
          className={ `page-header__toggle-menu-button ${ !isMenuOpened ? 'page-header__toggle-menu-button--open-menu' : '' }` }
          onClick={ changeMenuStatus }
          type="button"
          aria-label={ `${ isMenuOpened ? 'Закрыть меню' : 'Открыть меню' }` }
        />
      </div>
    </header>
  )
}
