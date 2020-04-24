import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const removeDuplicates = (arr) => [...new Set(arr)];

const TextCheckbox = styled.div`
  display: flex;
  text-transform: capitalize;
  padding: 7px 10px;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? '#7fc464' : 'none'};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
`;

const FilterByCheckbox = ({ allItems, handleChange, active }) => {
  const alts = removeDuplicates(
    allItems.reduce((acc, item) => [...acc, item.office], []),
  );
  return (
    <Container>
      {alts.map((alt, index) => (
        <TextCheckbox
          key={index}
          isActive={active.includes(alt)}
          onClick={() => handleChange(alt)}
        >
          {alt}
        </TextCheckbox>
      ))}
    </Container>
  );
};

export default FilterByCheckbox;
