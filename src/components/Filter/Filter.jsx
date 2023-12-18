import React, { Component } from 'react';
import { FilterWrap, SearchTitle, SearchInput } from './Filter.styled';

export class Filter extends Component {
  handleSearch = e => {
    this.props.inputSearch(e.target.value);
  };

  render() {
    return (
      <FilterWrap>
        <SearchTitle>Search Contact</SearchTitle>
        <SearchInput
          name="filter"
          type="text"
          onChange={this.handleSearch}
          value={this.props.value}
        />
      </FilterWrap>
    );
  }
}
