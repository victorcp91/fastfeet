import React from 'react';
import PropTypes from 'prop-types';

import { Button, IconContainer } from './styles';

export default function RegisterButton({ text, icon: Icon, ...rest }) {
  return (
    <Button type="button" {...rest}>
      {Icon && (
        <IconContainer>
          <Icon />
        </IconContainer>
      )}
      {text}
    </Button>
  );
}

RegisterButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.element,
  ]),
};

RegisterButton.defaultProps = {
  icon: false,
};
