import React from 'react';
import styled from 'styled-components';
import { Label } from './../../components';

const SortContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  select {
    padding: 5px;
    width: 100px;
  }
`;

const Select = styled.select`
  text-transform: capitalize;
`;

const SortBy = ({ sortByAttrs, handleChange, active }) => (
  <SortContainer>
    <Label htmlFor="sort-items">Sort:</Label>
    <Select
      id="sort-items"
      onChange={(e) => handleChange(e.target.value)}
    >
      {active === null && <option value={null}>Sort on</option>}
      {sortByAttrs.map((attr, index) => (
        <option key={index} value={attr}>
          {attr}
        </option>
      ))}
    </Select>
  </SortContainer>
);

export default SortBy;
