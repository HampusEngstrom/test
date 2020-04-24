import React from 'react';
import styled from 'styled-components';
import { List } from './../components';
import Filter from '../features/Filter';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  box-sizing: border-box;

  @media (min-width: 480px) {
    width: 450px;
  }

  @media (min-width: 768px) {
    width: 675px;
  }

  @media (min-width: 1024px) {
    width: 900px;
  }

  @media (min-width: 1280px) {
    width: 1125px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  min-height: 50px;
  ul > li > div {
    box-shadow: 0px 0px 5px 0px lightgray;
    border: 1px solid #eeeeee;
    padding: 10px;
    justify-content: center;
  }
`;

const Colleagues = ({ colleagues, setColleagues }) => {
  const onFilter = (newItems) => {
    setColleagues(newItems);
  };
  return (
    <Container>
      <h1>The fellowship of the tretton37</h1>
      <Filter onFilter={onFilter} items={colleagues} />
      <ListContainer>
        <List items={colleagues} />
      </ListContainer>
    </Container>
  );
};

export default Colleagues;
