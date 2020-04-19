import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'libs/variables';

export default function Pen({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 325 325.375">
      <path
        fill={color}
        d="M114.688 284.676l-73.801-73.801 178.5-178.5 73.8 73.8zm-80.7-60.801l67.7 67.7-101.5 33.8zm281.899-140.3l-12.801 12.8-73.899-73.898 12.801-12.801c12.895-12.903 33.805-12.903 46.7 0l27.199 27.199c12.8 12.937 12.8 33.766 0 46.7zm0 0"
      />
    </svg>
  );
}

Pen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Pen.defaultProps = {
  width: 15,
  height: 16,
  color: colors.blue,
};
