import * as React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'libs/variables';

export default function Plus({ width, height, color }) {
  return (
    <svg height={height} width={width} viewBox="0 0 448 448">
      <path
        fill={color}
        d="M272 184a8 8 0 01-8-8V0h-80v176a8 8 0 01-8 8H0v80h176a8 8 0 018 8v176h80V272a8 8 0 018-8h176v-80zm0 0"
      />
    </svg>
  );
}

Plus.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Plus.defaultProps = {
  width: 16,
  height: 16,
  color: colors.white,
};
