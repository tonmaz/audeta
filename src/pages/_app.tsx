import React from 'react';
import NextApp from 'next/app';

import '../styles.css';

class MyApp extends NextApp {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
