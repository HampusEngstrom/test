import React from 'react';
import styled from 'styled-components';
import {
  GitHubButton,
  TwitterButton,
  LinkedInButton,
} from './SocialMediaButtons';

const SocialMedia = styled.div``;

const Avatar = ({ src }) => (
  <div>
    <img src={src} alt="" />
  </div>
);

const Colleague = ({ item: colleague }) => (
  <>
    <Avatar src={colleague.imagePortraitUrl} />
    <p>{colleague.name}</p>
    <SocialMedia>
      <GitHubButton url={colleague.gitHub} />
      <TwitterButton url={colleague.twitter} />
      <LinkedInButton url={colleague.linkedIn} />
    </SocialMedia>
  </>
);

export default Colleague;
