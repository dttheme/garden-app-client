import React from 'react';
import { shallow } from 'enzyme';
import { PlantPage } from './PlantPage';

describe('<PlantPage />', () => {

  it('should render page', () => {
    const fakeMatch = {
      params: {
        id: 1
      }
    };
    const fakePlant = {
      id: '123',
      plantName: 'Lettuce'
    };
    const fakeUser= {
      firstName: 'Joe',
    };
    const wrapper = shallow(<PlantPage isNotLinking user={fakeUser} match={fakeMatch} plant={fakePlant} fetchPlant={() => {}}/>);
    expect(wrapper).toMatchSnapshot()
  });

  it('calls fetchPlant on page load', () => {
    const mockFetchPlant = jest.fn();
    const fakeMatch = {
      params: {
        id: 1
      }
    };
    const fakePlant = {
      id: '123',
      plantName: 'Lettuce'
    };
    const fakeUser= {
      firstName: 'Joe',
    };
    const wrapper = shallow(<PlantPage user={fakeUser} match={fakeMatch} plant={fakePlant} fetchPlant={mockFetchPlant} />);
    expect(mockFetchPlant).toHaveBeenCalledTimes(1);
  })
  })
