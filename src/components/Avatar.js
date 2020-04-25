import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallLoadingSpinner, ConditionalRender } from './';

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

export const Avatar = ({ src }) => {
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
