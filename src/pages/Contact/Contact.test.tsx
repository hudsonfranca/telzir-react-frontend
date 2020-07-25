import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import Contact from './Contact';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Contact />);
});

describe('<Home /> redering', () => {
  it('Should render without errors', () => {
    const home = renderer.create(<Contact />).toJSON();

    expect(home).toMatchSnapshot();
  });

  it('Should render 1 contactContainer', () => {
    expect(wrapper.find(`[data-test='contactContainer']`).length).toEqual(1);
  });

  it('Should render 1 contactSectionOne', () => {
    expect(wrapper.find(`[data-test='contactSectionOne']`).length).toEqual(1);
  });

  it('Should render 1 contactSectionTwo', () => {
    expect(wrapper.find(`[data-test='contactSectionTwo']`).length).toEqual(1);
  });

  it('Should render 4 contactCard', () => {
    expect(wrapper.find(`[data-test='contactCard']`).length).toEqual(4);
  });
});
