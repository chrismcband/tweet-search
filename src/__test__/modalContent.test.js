import React from 'react';
import ModalContent  from '../components/ModalContent';
import { shallow} from 'enzyme';

function setup() {
  const props = {
    user: {
      name: 'Lauren Taylor'
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

  it('renders selected user\'s name', () => {
    const { wrapper } = setup()
    const name = wrapper.find('.name');
    expect(name.text()).toBe('Lauren Taylor');
  });

});
