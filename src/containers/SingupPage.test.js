import React from 'react';
import { shallow, mount } from 'enzyme';
import { SignupPage } from './SignupPage';

describe('<SignupPage />', () => {

  it('should render page', () => {
    const wrapper = shallow(<SignupPage handleSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot()
  });

});
