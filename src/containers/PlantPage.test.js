import React from 'react';
import { shallow } from 'enzyme';
import { PlantPage } from './PlantPage';

describe('<PlantPage />', () => {

  it('should render page', () => {

    const fakePlant = {
      id: '123',
      plantName: 'Lettuce'
    };
    const wrapper = shallow(<PlantPage isNotLinking plant={fakePlant} />);
    expect(wrapper).toMatchSnapshot()
  });

  it('calls fetchPlant on page load', () => {
    const mockFetchPlant = jest.fn();
    const fakePlant = {
      id: '123',
      plantName: 'Lettuce'
    };
    const wrapper = shallow(<PlantPage plant={fakePlant} fetchPlant={mockFetchPlant} />);
    expect(mockFetchPlant).toHaveBeenCalledTimes(1);
  })
  })
