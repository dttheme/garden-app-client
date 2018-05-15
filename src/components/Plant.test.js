import React from 'react';
import { shallow } from 'enzyme';
import Plant from './Plant';

describe('<Plant />', () => {

  it('should render page', () => {
    const fakePlant={
      _id: '123',
      plantName: 'Pepper'
    };
    const wrapper = shallow(<Plant plant={fakePlant}/>);
    expect(wrapper).toMatchSnapshot()
  })
})
