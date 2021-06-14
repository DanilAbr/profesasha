import Link from "next/link";

interface Props {
  onItemClick: () => void,
}

export default function MainNav(props: Props) {
  const { onItemClick } = props;

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">

        <li className="main-nav__item">
          <Link href="/">
            <a
              className="main-nav__link"
              onClick={onItemClick}
            >Главная
              <svg className="main-nav__svg" width="14" height="14">
                <use xlinkHref="#icon-menu-item-arrow"/>
              </svg>
            </a>
          </Link>
        </li>

        <li className="main-nav__item">
          <Link href="/class-options">
            <a
              className="main-nav__link"
              onClick={onItemClick}
            >Варианты занятий
              <svg className="main-nav__svg" width="14" height="14">
                <use xlinkHref="#icon-menu-item-arrow"/>
              </svg>
            </a>
          </Link>
        </li>

      </ul>
    </nav>
  )
}
