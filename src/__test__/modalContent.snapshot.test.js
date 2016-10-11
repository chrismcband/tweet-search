import renderer from 'react-test-renderer';
import React from 'react';
import ModalContent from '../components/ModalContent';

describe('ModalContent component renders user info correctly', () => {
  it('renders correctly', () => {

    const user = { profile_image_url_https: "https://pbs.twimg.com/profile_images/582941615741775873/Lc1Awfhp_normal.jpg", name: "Michelle Obama", screen_name: "miche2007",
    location: "Washington DC", friends_count: '50000', followers_count: '999',
    statuses_count: '300', description: "They go low, you go high" };

    const rendered = renderer.create(
      <ModalContent user={user} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
