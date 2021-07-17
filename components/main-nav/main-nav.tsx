import Link from 'next/link';
import {mainNavItems} from '../../staticData/main-nav';

interface Props {
  onItemClick: () => void,
}

export default function MainNav(props: Props) {
  const {onItemClick} = props;
  return (
    <nav className="main-nav">
      <ul>
        { mainNavItems.map(({link, name, id}) => {
          return (
            <li className="main-nav__item" key={id}>
              <Link href={link}>
                <a
                  className="main-nav__link"
                  onClick={onItemClick}
                >{name}
                  <svg className="main-nav__svg" width="14" height="14">
                    <use xlinkHref="#icon-menu-item-arrow"/>
                  </svg>
                </a>
              </Link>
            </li>
          )
        }) }
      </ul>
    </nav>
  )
}
