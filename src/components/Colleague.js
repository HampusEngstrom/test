import React from 'react';
import styled from 'styled-components';
import {
  GitHubButton,
  TwitterButton,
  LinkedInButton,
  StackOverflowButton,
  TextRow,
  Text,
} from './';

const SocialMedia = styled.div``;

const Avatar = ({ src }) => (
  <div>
    <img src={src} alt="" />
  </div>
);

const Info = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Colleague = ({ item: colleague }) => (
  <>
    <Avatar src={colleague.imagePortraitUrl} />
    <Info>
      <TextRow>
        <Text>{colleague.name}</Text>
        <SocialMedia>
          <GitHubButton url={colleague.gitHub} />
          <TwitterButton url={colleague.twitter} />
          <LinkedInButton url={colleague.linkedIn} />
          <StackOverflowButton url={colleague.stackOverflow} />
        </SocialMedia>
      </TextRow>
      <TextRow>
        <Text>{`Office: ${colleague.office}`}</Text>
      </TextRow>
    </Info>
  </>
);

export default Colleague;
