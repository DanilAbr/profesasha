import { ReactNode } from "react";
import PageHeader from "../../components/page-header/page-header";
import PageFooter from "../../components/page-footer/page-footer";
import SvgLib from "../../components/svg-lib/svg-lib";

interface Props {
  pageModifier: string,
  children: ReactNode,
}

export default function DefaultPage(props: Props) {
  const { pageModifier, children } = props;

  return (
    <div className={ `default-page--${pageModifier}` }>
      <SvgLib />

      <PageHeader/>

      <main className="default-page__content">
        { children }
      </main>

      <PageFooter/>

      {/*<script src="main.js"></script>*/}
    </div>
  )
}
