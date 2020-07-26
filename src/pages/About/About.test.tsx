import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import About from './About';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<About />);
});

describe('<About /> redering', () => {
  it('Should render without errors', () => {
    const about = renderer.create(<About />).toJSON();

    expect(about).toMatchSnapshot();
  });

  it('Should render 1 aboutContainer', () => {
    expect(wrapper.find(`[data-test='aboutContainer']`).length).toEqual(1);
  });

  it('Should render 1 aboutSectionOne', () => {
    expect(wrapper.find(`[data-test='aboutSectionOne']`).length).toEqual(1);
  });

  it('Should render 1 aboutSectionTwo', () => {
    expect(wrapper.find(`[data-test='aboutSectionTwo']`).length).toEqual(1);
  });

  it('Should render 1 aboutSectionThree', () => {
    expect(wrapper.find(`[data-test='aboutSectionThree']`).length).toEqual(1);
  });

  it('Should render 1 imageSectionTwo', () => {
    expect(wrapper.find(`[data-test='imageSectionTwo']`).length).toEqual(1);
  });

  it('Should render 1 imageSectionThree', () => {
    expect(wrapper.find(`[data-test='imageSectionThree']`).length).toEqual(1);
  });

  it('Should render 1 aboutContentSectionTwo', () => {
    expect(wrapper.find(`[data-test='aboutContentSectionTwo']`).length).toEqual(
      1
    );
  });

  it('Should render 1 aboutContentSectionThree', () => {
    expect(
      wrapper.find(`[data-test='aboutContentSectionThree']`).length
    ).toEqual(1);
  });
});
