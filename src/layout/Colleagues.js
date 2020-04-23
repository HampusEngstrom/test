import React from 'react';
import styled from 'styled-components';
import { List } from './../components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
`;

const Colleagues = ({ colleagues }) => {
  return (
    <Container>
      <h1>The fellowship of the tretton37</h1>
      <List items={colleagues} />
    </Container>
  );
};

export default Colleagues;
