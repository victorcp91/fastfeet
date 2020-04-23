import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from 'assets/icons/Search';
import { Container } from './styles';

export default function SearchInput({ placeholder, value, onChange }) {
  return (
    <Container>
      <SearchIcon />
      <input
        type="search"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  value: '',
};
