import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #7fc464;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

const LoadingSpinner = () => (
  <Container>
    <Spinner />
  </Container>
);

export default LoadingSpinner;
