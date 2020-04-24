import React from 'react';
import styled from 'styled-components';
import { Label } from './../../components';

const Container = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-grow: 0;
  justify-content: center;
  input {
    width: 200px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid gray;
  }
`;

const FilterByText = ({ filterByAttr, handleChange }) => {
  return (
    <Container>
      <Label>{filterByAttr}</Label>
      <input
        type="text"
        name={filterByAttr}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Container>
  );
};

export default FilterByText;
