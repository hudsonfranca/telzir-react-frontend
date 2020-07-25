import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import SideDrawer from './SideDrawer';

let wraper: ReactWrapper;

beforeEach(() => {
  wraper = mount(
    <MemoryRouter>
      <SideDrawer />
    </MemoryRouter>
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<SideDrawer/> redering', () => {
  it('Should render without errors', () => {
    const wrapper = renderer
      .create(
        <MemoryRouter>
          <SideDrawer />
        </MemoryRouter>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render 2 sidedrawerContainer', () => {
    expect(wraper.find(`[data-test='sidedrawerContainer']`).length).toEqual(2);
  });

  it('Should render one HamburguerButton', () => {
    expect(wraper.find(`[data-test='hamburguer-button']`).length).toBe(1);
  });

  it('Should render one Menu', () => {
    expect(wraper.find(`[data-test='menu']`).length).toBe(1);
  });
});
