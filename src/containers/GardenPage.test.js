import React from 'react';
import { shallow } from 'enzyme';
import { GardenPage } from './GardenPage';

describe('<GardenPage />', () => {
  it('Should render without crashing', () => {
    shallow(<GardenPage />);
  });
});
