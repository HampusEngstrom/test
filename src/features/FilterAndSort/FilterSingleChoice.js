import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Checkbox = styled.div`
  display: flex;
  text-transform: capitalize;
  padding: 2px;
  margin: 2px;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`;

const FilterSingleChoice = ({ handleChange, active, children }) => (
  <Container>
    <Checkbox isActive={active} onClick={handleChange}>
      {children}
    </Checkbox>
  </Container>
);

export default FilterSingleChoice;
