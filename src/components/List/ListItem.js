import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 1px solid gray;
  width: 100%;
  min-width: 180px;
  margin: 10px;

  @media (min-width: 480px) {
    width: calc(45% - 20px);
  }
  @media (min-width: 768px) {
    width: 225px;
  }
`;

const ListItem = (props) => <Item>{props.children}</Item>;

export default ListItem;
