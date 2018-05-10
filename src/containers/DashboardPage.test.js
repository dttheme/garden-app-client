import React from 'react';
import { shallow } from 'enzyme';
import { DashboardPage } from './DashboardPage';

describe('<DashboardPage />', () => {
  it('Should render without crashing', () => {
    shallow(<DashboardPage />);
  });
});
