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

import {
  filterOnMultipleChoices,
  filterOnTextInput,
  filterOnSingleChoice,
} from './filters';

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
    multipleChoices: {
      [OFFICE]: [],
    },
    singleChoice: {},
    textInput: {},
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
      (state) => ({ ...state, multipleChoices: attr }),
      this.update,
    );
  };

  toggleMultipleChoices = (key) => (value) => {
    const { multipleChoices } = this.state;
    const activeKeyFilter = multipleChoices[key] || [];
    const isSet = activeKeyFilter.find((attr) => attr === value);
    if (isSet) {
      this.setFilterAttr({
        ...multipleChoices,
        [key]: multipleChoices[key].filter((attr) => attr !== value),
      });
    } else {
      this.setFilterAttr({
        ...multipleChoices,
        [key]: [...activeKeyFilter, value],
      });
    }
  };

  toggleSingleChoice = (key) => () => {
    this.setState(
      (state) => ({
        ...state,
        singleChoice: {
          ...state.singleChoice,
          [key]: !state.singleChoice[key],
        },
      }),
      this.update,
    );
  };

  setText = (key) => (value) => {
    this.setState(
      (state) => ({
        ...state,
        textInput: { ...state.textInput, [key]: value },
      }),
      this.update,
    );
  };

  update() {
    const {
      activeSort,
      multipleChoices,
      textInput,
      singleChoice,
    } = this.state;

    const filteredItems = this.props.allItems
      .filter(filterOnMultipleChoices(multipleChoices))
      .filter(filterOnTextInput(textInput))
      .filter(filterOnSingleChoice(singleChoice));

    sort(filteredItems)(activeSort);

    this.props.onFilter(filteredItems);
  }

  render() {
    return (
      <FilterContainer>
        <Row>
          <FilterByText
            filterByAttr={NAME}
            handleChange={this.setText(NAME)}
            active={this.state.textInput[NAME]}
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
            handleChange={this.toggleMultipleChoices(OFFICE)}
            active={this.state.multipleChoices[OFFICE]}
          />
          <SocialMediaFilter>
            <FilterByBoolean
              handleChange={this.toggleSingleChoice(GITHUB)}
              active={this.state.singleChoice[GITHUB]}
            >
              {<img src={GithubIcon} alt="" />}
            </FilterByBoolean>
            <FilterByBoolean
              handleChange={this.toggleSingleChoice(STACKOVERFLOW)}
              active={this.state.singleChoice[STACKOVERFLOW]}
            >
              {<img src={StackOverflowIcon} alt="" />}
            </FilterByBoolean>
            <FilterByBoolean
              handleChange={this.toggleSingleChoice(LINKEDIN)}
              active={this.state.singleChoice[LINKEDIN]}
            >
              {<img src={LinkedInIcon} alt="" />}
            </FilterByBoolean>
            <FilterByBoolean
              handleChange={this.toggleSingleChoice(TWITTER)}
              active={this.state.singleChoice[TWITTER]}
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
