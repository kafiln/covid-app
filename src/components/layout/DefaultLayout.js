import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

function DefaultLayout({ children }) {
  return (
    <div className="container mx-auto p-4 m-b-2 flex flex-col min-h-screen">
      <Header></Header>
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
