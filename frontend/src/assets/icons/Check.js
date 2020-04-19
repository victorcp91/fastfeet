import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'libs/variables';

export default function Check({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 15">
      <title />
      <path
        d="M6 10.7L1.8 6.5.4 7.9 6 13.5l12-12L16.6.1 6 10.7z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
}

Check.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Check.defaultProps = {
  width: 18,
  height: 15,
  color: colors.white,
};
