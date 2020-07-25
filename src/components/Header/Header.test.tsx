import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

let wraper: ReactWrapper;

beforeEach(() => {
  wraper = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<Header /> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render 1 headerContainer', () => {
    expect(wraper.find(`[data-test='headerContainer']`).length).toEqual(2);
  });

  it('Should render 1 headerHbContainer', () => {
    expect(wraper.find(`[data-test='headerHbContainer']`).length).toEqual(2);
  });

  it('Should render 1 headerLogo', () => {
    expect(wraper.find(`[data-test='headerLogo']`).length).toEqual(1);
  });
});
