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

import { Avatar } from './Avatar';

const SocialMedia = styled.div`
  min-height: 25px;
`;

const Info = styled.div`
  display: flex;
  flex-grow: 0;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 10px;
`;

export const Colleague = ({ item: colleague }) => (
  <>
    <Avatar src={colleague.imagePortraitUrl} />
    <Info>
      <TextRow>
        <Text>{colleague.name}</Text>
      </TextRow>
      <TextRow>
        <Text>{`Office: ${colleague.office}`}</Text>
      </TextRow>
      <TextRow>
        <SocialMedia>
          <GitHubButton url={colleague.gitHub} />
          <TwitterButton url={colleague.twitter} />
          <LinkedInButton url={colleague.linkedIn} />
          <StackOverflowButton url={colleague.stackOverflow} />
        </SocialMedia>
      </TextRow>
    </Info>
  </>
);
