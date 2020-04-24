import React from 'react';
import styled from 'styled-components';

const SortContainer = styled.div`
  display: flex;
  background-color: red;
  flex-direction: column;
  align-items: center;
  select {
    padding: 5px;
    width: 100px;
  }
`;

const Select = styled.select`
  text-transform: capitalize;
`;

const SortBy = ({ sortByAttrs, handleChange, active }) => {
  return (
    <SortContainer>
      <label htmlFor="sort-items">Sort</label>
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
};

export default SortBy;
