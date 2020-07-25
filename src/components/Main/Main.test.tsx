import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import Main from './Main';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Main />);
});

describe('<Layout /> redering', () => {
  it('Should render without errors', () => {
    const main = renderer.create(<Main />).toJSON();

    expect(main).toMatchSnapshot();
  });

  it('Should render 1 mainContainer', () => {
    expect(wrapper.find(`[data-test='mainContainer']`).length).toEqual(1);
  });
});
