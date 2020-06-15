import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

const Wrapper = styled.div``;

function DefaultLayout({ children }) {
  const { lang } = useContext(AppContext);
  return (
    <Wrapper
      lang={lang}
      className="container mx-auto py-1 px-6 flex flex-col min-h-screen"
    >
      {/* <FormattedMessage id={KEYS.WEBSITE_TITLE}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
            <html lang={lang.split('-')[0]} />
          </Helmet>
        )}
      </FormattedMessage> */}
      <Header></Header>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}

export default DefaultLayout;
