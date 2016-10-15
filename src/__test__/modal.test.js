import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal  from '../components/Modal';

function setup() {
  const props = {
    user: null,
    hideModal: jest.fn()
  }

  const wrapper = shallow(<Modal {...props} />);

  return {
    props,
    wrapper
  }
}

describe('<Modal />', () => {

  it('only displays if a there is a selected user', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').hasClass('modal-overlay')).toBe(false)
  });

  it('displays if there is a selected user', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').hasClass('modal-overlay')).toBe(true)
  });

  it('displays modal content', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').hasClass('modal-content')).toBe(true)
  })

  it('closes the modal overlay when clicked on', () => {
    const { wrapper } = setup();
    wrapper.find('div').simulate('click');
    expect(wrapper.find('div').hasClass('modal-overlay')).toBe(false)
  });

});
