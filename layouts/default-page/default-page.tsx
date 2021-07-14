import {ReactNode, useEffect} from "react";
import PageHeader from "../../components/page-header/page-header";
import PageFooter from "../../components/page-footer/page-footer";
import SvgLib from "../../components/svg-lib/svg-lib";
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill';
import {usePageLoadingStatus} from "../../hooks/usePageLoadingStatus";
import {PageLoader} from "../../components/page-loader/page-loader";

interface Props {
  pageModifier: string,
  children: ReactNode,
}

export default function DefaultPage(props: Props) {
  const { pageModifier, children } = props;

  useEffect(() => {
    smoothscroll.polyfill();
    // @ts-ignore
    window.__forceSmoothScrollPolyfill__ = true;
  })

  const loading = usePageLoadingStatus();

  return (
    <>

      <Head>
        <title>Александра Абрамова - преподаватель испанского языка</title>
      </Head>
      <div className={ `default-page--${pageModifier}` }>
        { loading && <PageLoader /> }
        <SvgLib />
        <PageHeader/>
        <main className="default-page__content">
          { children }
        </main>
        <PageFooter/>
      </div>

    </>
  )
}
