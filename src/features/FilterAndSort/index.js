import React from 'react';
import styled from 'styled-components';
import SortBy from './SortBy';

import MultipleChoicesFilter from './MultipleChoicesFilter';
import TextInputFilter from './TextInputFilter';
import SingleChoiceFilter from './SingleChoiceFilter';

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
  width: calc(100% - 2px);
  min-height: 50px;
  background-color: #fcfdff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 5px 0px lightgray;
  border: 1px solid #eeeeee;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 480px) {
    width: calc(100% - 30px);
    margin: 15px;
  }
`;

const SocialMediaFilter = styled.div`
  display: flex;
  flex-direction: row;
`;

class FilterAndSort extends React.PureComponent {
  state = {
    sortBy: null,
    multipleChoices: {
      [OFFICE]: [],
    },
    singleChoice: {},
    textInput: {},
  };

  sortAlternatives = [NAME, OFFICE];

  setSortAttr = (attr) => {
    this.setState(
      (state) => ({ ...state, sortBy: attr }),
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
      sortBy,
      multipleChoices,
      textInput,
      singleChoice,
    } = this.state;

    const filteredItems = this.props.allItems
      .filter(filterOnMultipleChoices(multipleChoices))
      .filter(filterOnTextInput(textInput))
      .filter(filterOnSingleChoice(singleChoice));

    sort(filteredItems)(sortBy);

    this.props.onFilter(filteredItems);
  }

  render() {
    return (
      <FilterContainer>
        <Row>
          <TextInputFilter
            filterByAttr={NAME}
            handleChange={this.setText(NAME)}
            active={this.state.textInput[NAME]}
          />
          <SortBy
            sortByAttrs={this.sortAlternatives}
            handleChange={this.setSortAttr}
            active={this.state.sortBy}
          />
        </Row>
        <Row>
          <MultipleChoicesFilter
            allItems={this.props.allItems}
            filterByAttr={OFFICE}
            handleChange={this.toggleMultipleChoices(OFFICE)}
            active={this.state.multipleChoices[OFFICE]}
          />
        </Row>
        <Row>
          <SocialMediaFilter>
            <SingleChoiceFilter
              handleChange={this.toggleSingleChoice(GITHUB)}
              active={this.state.singleChoice[GITHUB]}
            >
              {<img src={GithubIcon} alt="" />}
            </SingleChoiceFilter>
            <SingleChoiceFilter
              handleChange={this.toggleSingleChoice(STACKOVERFLOW)}
              active={this.state.singleChoice[STACKOVERFLOW]}
            >
              {<img src={StackOverflowIcon} alt="" />}
            </SingleChoiceFilter>
            <SingleChoiceFilter
              handleChange={this.toggleSingleChoice(LINKEDIN)}
              active={this.state.singleChoice[LINKEDIN]}
            >
              {<img src={LinkedInIcon} alt="" />}
            </SingleChoiceFilter>
            <SingleChoiceFilter
              handleChange={this.toggleSingleChoice(TWITTER)}
              active={this.state.singleChoice[TWITTER]}
            >
              {<img src={TwitterIcon} alt="" />}
            </SingleChoiceFilter>
          </SocialMediaFilter>
        </Row>
      </FilterContainer>
    );
  }
}

export default FilterAndSort;
