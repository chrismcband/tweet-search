import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../components/Modal';

function setup() {
  const props = {
    hideUserModal: jest.fn(),
    selectedUser: {
      name: "Michelle Obama",
      screen_name: "miche2007",
      location: "Washington DC"
    }
  }
  const wrapper = shallow(<Modal {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Modal', () => {

  it('closes the modal overlay when clicked on', () => {
     const { wrapper, props } = setup();
     wrapper.find('.modal-overlay').simulate('click');
     expect(props.hideUserModal.mock.calls.length).toBe(1);
  });

});
