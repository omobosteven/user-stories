import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, screen
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFoundComponent from '../../components/NotFoundComponent';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>
    )
  };
};


describe('NotFoundComponent Test', () => {
  it('should take a snapshot', () => {
    const {
      asFragment, container
    } = renderWithRouter(<NotFoundComponent />);
    const notFoundDiv = screen.getByTestId('not-found');
    const link = screen.getByTestId('home-link');

    expect(asFragment(<NotFoundComponent />)).toMatchSnapshot();
    expect(container.innerHTML).toMatch('Page not Found');
    expect(notFoundDiv).toContainElement(link);
  });
});
