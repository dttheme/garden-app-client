import React from 'react';
import { shallow } from 'enzyme';
import { MainContainer } from './MainContainer';

describe('<MainContainer />', () => {

  it('should render page', () => {
    const fakeUser = {
      id: '123',
      username: 'j@e.com',
      firstName: 'Joe',
      isLoggedIn: true,
    }
    const fakeAppState = {
        message: null
    }
    const wrapper = shallow(<MainContainer user={fakeUser} appState={fakeAppState} />);
    expect(wrapper).toMatchSnapshot()
  });

});
