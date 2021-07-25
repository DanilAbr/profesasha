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
    console.log('isMenuOpened', isMenuOpened);
    console.log('body ДО', body);
    // @ts-ignore
    console.log('body.clientWidth', body.clientWidth);
    console.log('body && body.clientWidth < 1023', body && body.clientWidth < 1023)
    if (body) {
      if (body.clientWidth < 1023) {
        body.style.overflow = isMenuOpened ? 'hidden' : 'auto';
      } else {
        body.style.overflow = 'auto';
      }
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
