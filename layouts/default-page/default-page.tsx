import { ReactNode } from "react";
import PageHeader from "../../components/page-header/page-header";
import PageFooter from "../../components/page-footer/page-footer";
import SvgLib from "../../components/svg-lib/svg-lib";
import Head from 'next/head';

interface Props {
  pageModifier: string,
  children: ReactNode,
}

export default function DefaultPage(props: Props) {
  const { pageModifier, children } = props;

  return (
    <>

      <Head>
        <title>Profesasha</title>
      </Head>
      <div className={ `default-page--${pageModifier}` }>
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
