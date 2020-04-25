import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 100%;
  margin: 15px;
`;

const ItemContainer = styled.li`
  display: flex;
  list-style: none;
  width: 100%;

  @media (min-width: 480px) {
    width: 225px;
  }
`;

const ListItem = (props) => (
  <ItemContainer>
    <Item>{props.children}</Item>
  </ItemContainer>
);

export default ListItem;
