import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Route, MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Search from './index';

describe('Search component', () => {
  let realUseContext;
  let useContextMock;
  let container = null;

  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    React.useContext = realUseContext;
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders without crashing', async() => {
    useContextMock.mockReturnValue('Test Value');

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/search/movie/page/1']}>
          <Route path='/search/movie/page/:'>
            <Search />
          </Route>
        </MemoryRouter>, container);
      });

  });

});
