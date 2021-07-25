import { ReactNode, useContext, useEffect } from 'react';
import PageHeader from '../../components/page-header/page-header';
import PageFooter from '../../components/page-footer/page-footer';
import SvgLib from '../../components/svg-lib/svg-lib';
import smoothscroll from 'smoothscroll-polyfill';
import { usePageLoadingStatus } from '../../hooks/usePageLoadingStatus';
import { PageLoader } from '../../components/page-loader/page-loader';
import AppointmentModal from '../../components/appointment-modal/appointment-modal';
import { AppContext } from '../../context/AppContext';

interface Props {
  pageModifier: string,
  children: ReactNode,
}

export default function DefaultPage(props:Props) {
  const { pageModifier, children } = props;

  const { state } = useContext(AppContext);

  useEffect(() => {
    smoothscroll.polyfill();
    // @ts-ignore
    window.__forceSmoothScrollPolyfill__ = true;
  })

  const loading = usePageLoadingStatus();

  return (
    <div className={ `default-page--${ pageModifier }` }>
      { loading && <PageLoader /> }

      <SvgLib />
      <PageHeader />

      <main className="default-page__content">
        { children }
      </main>

      <div className="default-page__footer">
        <PageFooter />
      </div>

      { state.isFormOpened && <AppointmentModal />}
    </div>
  )
}
