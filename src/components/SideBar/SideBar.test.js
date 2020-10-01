import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SideBar from './index';

describe('SideBar component', () => {
  let realUseContext;
  let useContextMock;

  beforeEach(() => {
    realUseContext = React.useContext;
    useContextMock = React.useContext = jest.fn();
  });

  afterEach(() => {
    React.useContext = realUseContext;
  });

  it('renders without crashing', async() => {
    useContextMock.mockReturnValue('Test Value');

    const element = new ShallowRenderer().render(
      <SideBar />
    );

    expect(element).toMatchSnapshot();

  });

});
