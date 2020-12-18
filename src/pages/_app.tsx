import React, { useEffect } from 'react';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
