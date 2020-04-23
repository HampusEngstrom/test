import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 1px solid gray;
  width: 180px;
  margin: 20px;
`;

const ListItem = (props) => <Item>{props.children}</Item>;

export default ListItem;
