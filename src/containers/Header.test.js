import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot()
  });
});
