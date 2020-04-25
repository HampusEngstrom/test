import React, { useState } from 'react';
import styled from 'styled-components';
import {
  GitHubButton,
  TwitterButton,
  LinkedInButton,
  StackOverflowButton,
  TextRow,
  Text,
  SmallLoadingSpinner,
  ConditionalRender,
} from './';

const SocialMedia = styled.div`
  min-height: 25px;
`;

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  min-height: 200px;
  img {
    z-index: 1;
    transform: scale(1.15);
    padding-top: 10%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
`;

const Avatar = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <AvatarContainer>
      <ConditionalRender condition={!loaded}>
        <SmallLoadingSpinner />
      </ConditionalRender>
      <ImageContainer isLoaded={loaded}>
        <img src={src} alt="" onLoad={() => setLoaded(true)} />
      </ImageContainer>
    </AvatarContainer>
  );
};

const Info = styled.div`
  display: flex;
  flex-grow: 0;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 10px;
`;

const Colleague = ({ item: colleague }) => (
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

export default Colleague;
