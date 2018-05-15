import React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginPage } from './LoginPage';

describe('<LoginPage />', () => {

  it('should render page', () => {
    const wrapper = shallow(<LoginPage handleSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot()
  });

});
