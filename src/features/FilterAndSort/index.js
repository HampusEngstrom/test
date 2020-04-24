import React from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';

import FilterByCheckbox from './FilterByCheckbox';
import FilterByText from './FilterByText';
import FilterByBoolean from './FilterByBoolean';

import GithubIcon from '../../assets/github.png';
import StackOverflowIcon from '../../assets/stack-overflow.png';
import LinkedInIcon from '../../assets/linkedin.png';
import TwitterIcon from '../../assets/twitter.png';

import { sort } from '../../helpers/array/';
import { Row } from '../../components';

const NAME = 'name';
const OFFICE = 'office';
const GITHUB = 'gitHub';
const LINKEDIN = 'linkedIn';
const TWITTER = 'twitter';
const STACKOVERFLOW = 'stackOverflow';

const FilterContainer = styled.div`
  width: calc(100% - 20px);
  min-height: 50px;
  background-color: #fcfdff;
  margin: 20px 10px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 5px 0px lightgray;
  border: 1px solid #eeeeee;
  flex-direction: column;
  flex-wrap: wrap;
`;

const SocialMediaFilter = styled.div`
  display: flex;
  flex-direction: row;
`;

class FilterAndSort extends React.PureComponent {
  state = {
    activeSort: null,
    activeFilter: {
      [OFFICE]: [],
    },
    activeBooleanFilter: {
      [GITHUB]: false,
      [LINKEDIN]: false,
      [TWITTER]: false,
      [STACKOVERFLOW]: false,
    },
    activeTextFilter: {},
  };

  sortAlternatives = [NAME, OFFICE];

  setSortAttr = (attr) => {
    this.setState(
      (state) => ({ ...state, activeSort: attr }),
      this.update,
    );
  };

  setFilterAttr = (attr) => {
    this.setState(
      (state) => ({ ...state, activeFilter: attr }),
      this.update,
    );
  };

  toggleFilterAttr = (key) => (value) => {
    const { setFilterAttr } = this;
    const { activeFilter } = this.state;
    const activeKeyFilter = activeFilter[key] || [];
    const isSet = activeKeyFilter.find((attr) => attr === value);
    if (isSet) {
      setFilterAttr({
        ...activeFilter,
        [key]: activeFilter[key].filter((attr) => attr !== value),
      });
    } else {
      setFilterAttr({
        ...activeFilter,
        [key]: [...activeKeyFilter, value],
      });
    }
  };

  toggleFilterBoolean = (key) => () => {
    this.setState(
      (state) => ({
        ...state,
        activeBooleanFilter: {
          ...state.activeBooleanFilter,
          [key]: !state.activeBooleanFilter[key],
        },
      }),
      this.update,
    );
  };

  setFilterText = (key) => (value) => {
    this.setState(
      (state) => ({
        ...state,
        activeTextFilter: { ...state.activeTextFilter, [key]: value },
      }),
      this.update,
    );
  };

  update() {
    const {
      activeFilter,
      activeSort,
      activeTextFilter,
      activeBooleanFilter,
    } = this.state;

    const activeFilterKeys = Object.keys(activeFilter).filter(
      (key) => activeFilter[key].length > 0,
    );
    const activeTextFilterKeys = Object.keys(activeTextFilter);
    const activeBooleanFilterKeys = Object.keys(
      activeBooleanFilter,
    ).filter((key) => activeBooleanFilter[key]);

    const filteredItems = this.props.allItems
      .filter((item) => {
        const checkboxesOK = activeFilterKeys.every((key) =>
          activeFilter[key].includes(item[key]),
        );
        return checkboxesOK;
      })
      .filter((item) => {
        const textOK = activeTextFilterKeys.every(
          (key) => item[key].indexOf(activeTextFilter[key]) === 0,
        );
        return textOK;
      })
      .filter((item) => {
        const booleansOK = activeBooleanFilterKeys.every(
          (key) => item[key],
        );
        return booleansOK;
      });

    sort(filteredItems)(activeSort);
    this.props.onFilter(filteredItems);
  }

  render() {
    return (
      <FilterContainer>
        <Row>
          <FilterByText
            filterByAttr={NAME}
            handleChange={this.setFilterText(NAME)}
            active={this.state.activeTextFilter[NAME]}
          />
          <SortBy
            sortByAttrs={this.sortAlternatives}
            handleChange={this.setSortAttr}
            active={this.state.activeSort}
          />
        </Row>
        <Row>
          <FilterByCheckbox
            allItems={this.props.allItems}
            filterByAttr={OFFICE}
            handleChange={this.toggleFilterAttr(OFFICE)}
            active={this.state.activeFilter[OFFICE]}
          />
          <SocialMediaFilter>
            <FilterByBoolean
              handleChange={this.toggleFilterBoolean(GITHUB)}
              active={this.state.activeBooleanFilter[GITHUB]}
            >
              {<img src={GithubIcon} alt="" />}
            </FilterByBoolean>
            <FilterByBoolean
              handleChange={this.toggleFilterBoolean(STACKOVERFLOW)}
              active={this.state.activeBooleanFilter[STACKOVERFLOW]}
            >
              {<img src={StackOverflowIcon} alt="" />}
            </FilterByBoolean>
            <FilterByBoolean
              handleChange={this.toggleFilterBoolean(LINKEDIN)}
              active={this.state.activeBooleanFilter[LINKEDIN]}
            >
              {<img src={LinkedInIcon} alt="" />}
            </FilterByBoolean>
            <FilterByBoolean
              handleChange={this.toggleFilterBoolean(TWITTER)}
              active={this.state.activeBooleanFilter[TWITTER]}
            >
              {<img src={TwitterIcon} alt="" />}
            </FilterByBoolean>
          </SocialMediaFilter>
        </Row>
      </FilterContainer>
    );
  }
}

export default FilterAndSort;
