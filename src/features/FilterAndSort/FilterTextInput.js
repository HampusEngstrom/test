import React from 'react';
import styled from 'styled-components';
import { Label } from './../../components';

const Container = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-grow: 0;
  justify-content: center;
  flex-direction: column;
  input {
    width: 170px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid gray;
    @media (min-width: 480px) {
      width: 170px;
    }
    @media (min-width: 768px) {
      width: 200px;
    }
  }
`;

const FilterTextInput = ({ filterByAttr, handleChange }) => (
  <Container>
    <Label>{filterByAttr}</Label>
    <input
      type="text"
      name={filterByAttr}
      onChange={(e) => handleChange(e.target.value)}
    />
  </Container>
);

export default FilterTextInput;
