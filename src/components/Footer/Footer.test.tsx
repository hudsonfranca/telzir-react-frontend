import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import 'jest-styled-components';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe('<Footer/> redering', () => {
  it('Should render without errors', () => {
    const footer = renderer.create(<Footer />).toJSON();

    expect(footer).toMatchSnapshot();
  });
});
