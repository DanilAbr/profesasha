export default function SocialList() {
  return (
    <div className="social-list">
      <ul className="social-list__content">

        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.instagram.com/profesasha/?r=nametag"
            aria-label="instagram"
          >
            <svg
              className="social-list__icon social-list__icon--instagram"
              width="13"
              height="13"
              fill="none">
              <use xlinkHref="#icon-instagram"/>
            </svg>
          </a>
        </li>

      </ul>
    </div>
  )
}
