import MainNav from "../main-nav/main-nav";
import { useState } from "react";

export default function PageHeader() {
  const [ isMenuOpened, setMenuStatus ] = useState(false);

  function changeMenuStatus() {
    setMenuStatus((prev) => !prev);
  }

  return (
    <header className="page-header">
      <div className={ `page-header__menu-pre-wrapper ${!isMenuOpened ? "page-header__menu-pre-wrapper--hide" : ""}` }>
        <div className="page-header__menu-wrapper">
          <MainNav onItemClick={ changeMenuStatus }/>
        </div>
      </div>

      <div className="page-header__button-wrapper">
        <button
          className={ `page-header__toggle-menu-button ${!isMenuOpened ? "page-header__toggle-menu-button--open-menu" : ""}` }
          onClick={ changeMenuStatus }
          type="button"
          aria-label={ `${isMenuOpened ? "Закрыть меню" : "Открыть меню"}` }
        />
      </div>
    </header>
  )
}
