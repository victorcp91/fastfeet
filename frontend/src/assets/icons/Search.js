import React from 'react';
import PropTypes from 'prop-types';
import { colors } from 'libs/variables';

export default function Search({ width, height, color }) {
  return (
    <svg width={width} height={height} fill={color} viewBox="0 0 446.25 446.25">
      <path d="M318.75 280.5h-20.4l-7.649-7.65c25.5-28.05 40.8-66.3 40.8-107.1C331.5 73.95 257.55 0 165.75 0S0 73.95 0 165.75 73.95 331.5 165.75 331.5c40.8 0 79.05-15.3 107.1-40.8l7.65 7.649v20.4L408 446.25 446.25 408l-127.5-127.5zm-153 0C102 280.5 51 229.5 51 165.75S102 51 165.75 51 280.5 102 280.5 165.75s-51 114.75-114.75 114.75z" />
    </svg>
  );
}

Search.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Search.defaultProps = {
  width: 16,
  height: 16,
  color: colors.gray,
};
