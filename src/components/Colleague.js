import React from 'react';
import styled from 'styled-components';
import { GitHubButton, TwitterButton, LinkedInButton } from './';

const SocialMedia = styled.div``;

const Avatar = ({ src }) => (
  <div>
    <img src={src} alt="" />
  </div>
);

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const Text = styled.div`
  margin: 0;
  padding: 0;
`;

const Info = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: red;
`;

const Colleague = ({ item: colleague }) => (
  <>
    <Avatar src={colleague.imagePortraitUrl} />
    <Info>
      <Row>
        <Text>{colleague.name}</Text>
        <SocialMedia>
          <GitHubButton url={colleague.gitHub} />
          <TwitterButton url={colleague.twitter} />
          <LinkedInButton url={colleague.linkedIn} />
        </SocialMedia>
      </Row>
      <Row>
        <Text>{`Office: ${colleague.office}`}</Text>
      </Row>
    </Info>
  </>
);

export default Colleague;
