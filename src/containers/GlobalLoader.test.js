import React from 'react';
import { shallow } from 'enzyme';
import { GlobalLoader } from './GlobalLoader';

describe('<GlobalLoader />', () => {

  it('should render page', () => {
    const fakeUser = {
      id: '123',
      username: 'j@e.com',
      firstName: 'Joe',
      isLoggedIn: true,
    }
    const fakeAppState = {
      isFetchingUserInfo: true,
    }
    const wrapper = shallow(<GlobalLoader user={fakeUser} appState={fakeAppState} fetchUserInfo={() => {}} />);
    expect(wrapper).toMatchSnapshot()
  });
});
