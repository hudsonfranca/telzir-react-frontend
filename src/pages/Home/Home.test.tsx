import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from './Home';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

describe('<Home /> redering', () => {
  it('Should render without errors', () => {
    const home = renderer.create(<Home />).toJSON();

    expect(home).toMatchSnapshot();
  });

  it('Should render 1 homeContainer', () => {
    expect(wrapper.find(`[data-test='homeContainer']`).length).toEqual(1);
  });

  it('Should render 1 homeSectionOne', () => {
    expect(wrapper.find(`[data-test='homeSectionOne']`).length).toEqual(1);
  });

  it('Should render 1 homeSectionTwo', () => {
    expect(wrapper.find(`[data-test='homeSectionTwo']`).length).toEqual(1);
  });

  it('Should render 1 homeSectionTwoTitle', () => {
    expect(wrapper.find(`[data-test='homeSectionTwoTitle']`).length).toEqual(1);
  });

  it('Should render 3 homeSectionTwoCard', () => {
    expect(wrapper.find(`[data-test='homeSectionTwoCard']`).length).toEqual(3);
  });

  it('Should render 1 homeSectionThree', () => {
    expect(wrapper.find(`[data-test='homeSectionThree']`).length).toEqual(1);
  });
});
