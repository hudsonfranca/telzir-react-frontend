import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import Layout from './Layout';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Layout />);
});

describe('<Layout /> redering', () => {
  it('Should render without errors', () => {
    const layout = renderer.create(<Layout />).toJSON();

    expect(layout).toMatchSnapshot();
  });

  it('Should render 1 layoutGrid', () => {
    expect(wrapper.find(`[data-test='layoutGrid']`).length).toEqual(1);
  });

  it('Should render 1 sidedrawerProvider', () => {
    expect(wrapper.find(`[data-test='sidedrawerProvider']`).length).toEqual(1);
  });

  it('Should render 1 header', () => {
    expect(wrapper.find(`[data-test='header']`).length).toEqual(1);
  });

  it('Should render 1 sideDrawer', () => {
    expect(wrapper.find(`[data-test='sideDrawer']`).length).toEqual(1);
  });

  it('Should render 1 main', () => {
    expect(wrapper.find(`[data-test='main']`).length).toEqual(1);
  });

  it('Should render 1 routes', () => {
    expect(wrapper.find(`[data-test='routes']`).length).toEqual(1);
  });

  it('Should render 1 footer', () => {
    expect(wrapper.find(`[data-test='footer']`).length).toEqual(1);
  });
});
