import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { AppContext } from '../../context';
import { KEYS } from '../../i18n';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

function DefaultLayout({ children }) {
  const { lang } = useContext(AppContext);
  return (
    <div className="container mx-auto p-1 m-b-2 flex flex-col min-h-screen">
      <HelmetProvider>
        <FormattedMessage id={KEYS.TITLE}>
          {(title) => (
            <Helmet>
              <title>{title}</title>
              <html lang={lang.split('-')[0]} />
            </Helmet>
          )}
        </FormattedMessage>
        <Header></Header>
        <Main>{children}</Main>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default DefaultLayout;
