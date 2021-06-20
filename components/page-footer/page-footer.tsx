import SocialList from "../social-list/social-list";

export default function PageFooter() {
  return (
    <footer className="page-footer">
      <div className="page-footer__social">
        <SocialList />
      </div>
      <p className="page-footer__copyright">©️ 2021 profesasha.ru | все права защищены</p>
    </footer>
  )
}
