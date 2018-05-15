import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomePage } from './HomePage';

describe('<HomePage />', () => {

  it('should render page', () => {
    const fakeAppState = {
      isFetchingUserInfo: true,
    };
    const fakeUser = {
      id: '123',
      username: 'j@e.com',
      firstName: 'Joe',
      isLoggedIn: true,
    };
    const wrapper = shallow(<HomePage user={fakeUser} appState={fakeAppState} fetchUserInfo={() => {}} />);
    expect(wrapper).toMatchSnapshot()
  });
});
