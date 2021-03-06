import React, { useState } from 'react';
import styled from 'styled-components';
import { List, InfinityScroll } from './../components';
import FilterAndSort from '../features/FilterAndSort';
import { Colleague } from '../components/';

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

const Header = styled.h1`
  font-size: 1.5em;
  padding: 20px 10px;
`;

const Colleagues = ({ allColleagues }) => {
  const [colleagues, setColleagues] = useState(allColleagues);

  return (
    <Container>
      <Header>The fellowship of the tretton37</Header>
      <FilterAndSort
        onFilter={setColleagues}
        allItems={allColleagues}
      />
      <ListContainer>
        <InfinityScroll
          items={colleagues}
          render={({ setOfItems }) => (
            <List items={setOfItems} Element={Colleague} />
          )}
        ></InfinityScroll>
      </ListContainer>
    </Container>
  );
};

export default Colleagues;
