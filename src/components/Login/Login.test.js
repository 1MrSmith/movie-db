import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Login from './index';

describe('Login component', () => {
  let container;
  let realUseContext;
  let useContextMock;

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
      <Login />, container);
    });

  });

});
