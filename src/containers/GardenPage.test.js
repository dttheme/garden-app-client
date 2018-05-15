import React from 'react';
import { shallow } from 'enzyme';
import { GardenPage } from './GardenPage';


describe('<GardenPage />', () => {

  it('should render page', () => {
    const fakeGarden = {
      plants:
      [{
        id: '123',
        plantName: 'Lettuce'
      },
      {
        id: '456',
        plantName: 'Jalepeno'
      }]
    };
    const wrapper = shallow(<GardenPage garden={fakeGarden} fetchGarden={() => {}} />);
    expect(wrapper).toMatchSnapshot()
  });

  it('calls fetchGarden on page load', () => {
    const mockFetchGarden = jest.fn();
    const fakeGarden = {
      plants:
      [{
        id: '123',
        plantName: 'Lettuce'
      },
      {
        id: '456',
        plantName: 'Jalepeno'
      }]
    };
    const wrapper = shallow(<GardenPage garden={fakeGarden} fetchGarden={mockFetchGarden} />);
    expect(mockFetchGarden).toHaveBeenCalledTimes(1);
  });

});
