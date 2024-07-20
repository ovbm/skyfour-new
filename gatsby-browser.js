/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import RootElement from './src/components/root-element';

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const pagePath = location
    ? location.pathname + location.search + location.hash
    : undefined;

  setTimeout(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);

  return true;
};

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};
