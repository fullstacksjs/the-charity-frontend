import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import {
  createMemoryHistory,
  ReactLocation,
  Router,
} from '@tanstack/react-location';
import { ThemeProvider } from '../src/design';
import { DecoratorFn, Parameters } from '@storybook/react';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
  },
};

export const decorators: DecoratorFn[] = [
  (Story, { args }) => {
    const router = args.router;
    const { layout, ...routes } = args.router ?? {};
    const Layout = layout ?? React.Fragment;
    const location = new ReactLocation({
      history: createMemoryHistory({ initialEntries: [router?.route ?? '/'] }),
    });

    return router ? (
      <Router routes={[routes]} location={location}>
        <Layout>
          <Story />
        </Layout>
      </Router>
    ) : (
      <Router routes={[]} location={location}>
        <Story />
      </Router>
    );
  },
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
