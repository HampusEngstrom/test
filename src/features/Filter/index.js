import React, { useState } from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';
import { sort } from './sort';

const NAME = 'name';
const OFFICE = 'office';

const sortAlternatives = [NAME, OFFICE];

const FilterContainer = styled.div`
  width: calc(100% - 20px);
  min-height: 50px;
  background-color: #fcfdff;
  margin: 20px 10px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 5px 0px lightgray;
  border: 1px solid #eeeeee;
`;

const Filter = ({ items, onFilter }) => {
  const [activeSort, setSortAttr] = useState(null);

  const onSort = (key) => {
    setSortAttr(key);
    onFilter(sort([...items])(key));
  };

  return (
    <FilterContainer>
      <SortBy
        items={items}
        sortByAttrs={sortAlternatives}
        handleChange={onSort}
        active={activeSort}
      />
    </FilterContainer>
  );
};

export default Filter;
