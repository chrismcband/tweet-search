import renderer from 'react-test-renderer';
import React from 'react';
import ModalContent from '../components/ModalContent';

describe('ModalContent component renders user info correctly', () => {
  it('renders correctly', () => {
    const user = { name: "Michelle Obama", screen_name: "miche2007" };
    const rendered = renderer.create(
      <ModalContent user={user} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
