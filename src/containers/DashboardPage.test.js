import React from 'react';
import { shallow, mount } from 'enzyme';
import { DashboardPage } from './DashboardPage';

describe('<DashboardPage />', () => {

  it('should render page', () => {
    const wrapper = shallow(<DashboardPage handleSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot()
  });
});
