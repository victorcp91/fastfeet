import React from 'react';
import PropTypes from 'prop-types';

import OptionsIcon from 'assets/icons/Options';
import { Container } from './styles';

export default function ActionsMenu({ children }) {
  return (
    <Container>
      <span className="options-icon">
        <OptionsIcon />
      </span>
      <ul>{children}</ul>
    </Container>
  );
}

ActionsMenu.propTypes = {
  children: PropTypes.element.isRequired,
};
