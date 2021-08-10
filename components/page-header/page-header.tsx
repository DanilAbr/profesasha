import MainNav from '../main-nav/main-nav';
import { useEffect, useState } from 'react';
import useEscKeyListener from '../../hooks/useEscKeyListener';
import useNonTargetMouseClickListener from '../../hooks/useNonTargetMouseClickListener';
// @ts-ignore
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function PageHeader() {
  const [ isMenuOpened, setMenuStatus ] = useState(false);
  let targetElement:any = null;

  useEscKeyListener(() => setMenuStatus(false));
  useNonTargetMouseClickListener(() => setMenuStatus(false), 'page-header');

  function changeMenuStatus() {
    setMenuStatus((prev) => !prev);

    if (targetElement) {
      if (isMenuOpened) disableBodyScroll(targetElement);
      console.log(targetElement);
      if (!isMenuOpened) enableBodyScroll(targetElement);
    }

  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const body = document.querySelector('body');

      if (body && body.clientWidth < 1000 && isMenuOpened) {
        targetElement = document.querySelector('.page-header__menu-pre-wrapper');
        body.style.overflow = 'hidden';
      } else if (body) {
        body.style.overflow = 'auto';
      }
    }

    return clearAllBodyScrollLocks();
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
