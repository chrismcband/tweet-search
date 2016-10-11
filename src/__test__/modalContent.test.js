import React from 'react';
import ModalContent  from '../components/ModalContent';
import { shallow } from 'enzyme';

function setup() {
  const props = {
    user: {
      name: 'Michelle Obama',
      screen_name: "miche2007"
    }
  }

  const wrapper = shallow(<ModalContent {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<ModalContent />', () => {
  it('renders modal display', () => {
    const { wrapper } = setup()
    expect(wrapper.find('div').hasClass('modal-display')).toBe(true)
    expect(wrapper.find('span').hasClass('name')).toBe(true)
  });

});
