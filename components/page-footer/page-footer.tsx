import SocialList from "../social-list/social-list";
import MailDisplay from '../atoms/mail-display/mail-display';

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="page-footer__social">
        <SocialList />
        <MailDisplay />
        <a
          className='page-footer__profi-link'
          href='https://chuvashia.profi.ru/profile/YanushkinaAU/reviews/'
          target='_blank'
          aria-label='отзывы на профу.ру'
        >
          <svg width='65' height='13'>
            <use xlinkHref='#logo-profi' />
          </svg>
        </a>
      </div>
      <p className="page-footer__copyright">©️ 2021 profesasha.ru | все права защищены</p>
    </footer>
  )
}
