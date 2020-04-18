import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from 'assets/icons/Search';
import { Container } from './styles';

export default function SearchInput({ placeholder }) {
  return (
    <Container>
      <SearchIcon />
      <input type="search" name="search" placeholder={placeholder} />
    </Container>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
