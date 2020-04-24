import React from 'react';
import styled from 'styled-components';
import { ListItem } from './';

const ListItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const List = ({ items, Element }) => (
  <ListItems>
    {items.map((item, index) => (
      <ListItem key={index}>
        <Element item={item} />
      </ListItem>
    ))}
  </ListItems>
);

export default List;
