import React from 'react';
import { shallow, mount } from 'enzyme';
import { DashboardPage } from './DashboardPage';

describe('<DashboardPage />', () => {
  it('Should render without crashing', () => {
    shallow(<DashboardPage />);
  });

// QUESTION: How do I pass the values in?

  it('should fire createPlant callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<DashboardPage onSubmit={callback} />);
    const plantName = "Squash";
    wrapper.find('Field').instance().value = plantName;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it('should redirect user to plant page on submit', () => {

  })
});
