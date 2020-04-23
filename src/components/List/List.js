import React from 'react';
import styled from 'styled-components';
import { ListItem } from './';
import Colleague from '../Colleague';

const ListItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const List = ({ items }) => {
  return (
    <ListItems>
      {items.map((item, index) => (
        <ListItem key={index}>
          <Colleague item={item} />
        </ListItem>
      ))}
    </ListItems>
  );
};

export default List;
