import MailDisplay from '../atoms/mail-display/mail-display';

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="page-footer__links">
        <a
          className="page-footer__instagram-link"
          href="//www.instagram.com/profesasha/?r=nametag"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram Profesasha"
        >
          <img
            src="/assets/images/social-link-insta-logo.png"
            width="24"
            height="24"
            alt="Логотип Instagram"
          />
        </a>

        <MailDisplay />

        <a
          className="page-footer__profi-link"
          href="https://chuvashia.profi.ru/profile/YanushkinaAU/reviews/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="отзывы на профу.ру"
        >
          <svg width="100" height="20">
            <use xlinkHref="#logo-profi" />
          </svg>
        </a>
      </div>
      <p className="page-footer__copyright">© 2021 profesasha.ru | все права защищены</p>
    </footer>
  )
}
