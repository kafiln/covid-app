import React, { Fragment, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import messages from './messages';

const Provider = ({ children, locale = 'fr-fr' }) => {
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};
export const IntlContext = createContext(Provider);
export default Provider;
