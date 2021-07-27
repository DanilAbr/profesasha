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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M3.998.018a4.478 4.478 0 00-2.456 1.056 4.078 4.078 0 00-.806.917A4.41 4.41 0 00.02 4.033c-.025.28-.025 11.652 0 11.931.068.738.311 1.43.718 2.043.345.52.734.91 1.256 1.256.612.407 1.304.65 2.042.718.28.025 11.65.025 11.93 0a4.389 4.389 0 002.042-.718c.52-.345.91-.735 1.256-1.256a4.39 4.39 0 00.718-2.043c.025-.279.025-11.652 0-11.93a4.39 4.39 0 00-.718-2.044A4.297 4.297 0 0018.006.733a4.408 4.408 0 00-2.041-.717c-.252-.023-11.722-.02-11.967.002zm8.753 2.436c.969.04 1.418.107 1.965.289.652.217 1.099.49 1.564.956.474.475.743.916.96 1.572.18.548.245 1 .285 1.97.024.593.024 4.903 0 5.496-.04.972-.105 1.423-.286 1.971-.216.655-.485 1.096-.96 1.572-.464.466-.91.739-1.563.956-.547.182-.994.248-1.964.288-.576.025-4.946.025-5.522 0-.97-.04-1.418-.106-1.965-.288-.651-.217-1.097-.49-1.564-.956a3.698 3.698 0 01-.959-1.572c-.274-.834-.307-1.344-.307-4.719s.033-3.886.307-4.718a3.705 3.705 0 01.96-1.572c.504-.505 1.021-.805 1.746-1.014.6-.173 1.137-.225 2.604-.25 1.046-.018 4.104-.005 4.7.02zM7.553 3.796c-1.25.045-1.693.12-2.244.385-.478.23-.896.647-1.126 1.126-.224.468-.313.88-.364 1.69-.034.54-.034 5.421 0 5.984.048.796.141 1.227.364 1.69.23.48.648.898 1.126 1.127.468.224.88.313 1.69.364.539.034 5.445.034 5.983 0 .81-.051 1.222-.14 1.69-.364.479-.23.896-.647 1.127-1.127.224-.465.316-.898.363-1.699.034-.576.034-5.389 0-5.965-.035-.608-.086-.93-.2-1.293-.27-.845-.85-1.426-1.696-1.696-.337-.108-.665-.16-1.238-.2-.267-.018-5.05-.038-5.475-.022zm6.856 1.35c.197.098.338.241.433.44.059.124.068.162.075.322a.746.746 0 01-.03.31 1.01 1.01 0 01-.267.421c-.11.095-.306.185-.461.212-.606.102-1.15-.465-1.023-1.066a.902.902 0 01.6-.685c.107-.037.15-.042.321-.037.19.007.206.01.352.083zm-3.997.985a3.882 3.882 0 013.457 3.858 3.873 3.873 0 01-3.878 3.879 3.874 3.874 0 01-3.878-3.879A3.874 3.874 0 018.74 6.316c.23-.08.575-.158.807-.185.203-.023.658-.023.864 0zm-.67 1.339c-.836.12-1.47.514-1.897 1.182-.139.217-.267.54-.333.839-.055.25-.055.746 0 .997a2.544 2.544 0 002.008 1.987c.24.05.727.047.97-.007a2.54 2.54 0 001.98-1.98c.055-.25.055-.746 0-.997-.225-1.018-.974-1.767-1.98-1.98a3.592 3.592 0 00-.749-.041z"
                  fill="#880006"/>
          </svg>
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
