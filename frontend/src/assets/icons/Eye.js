import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'libs/variables';

export default function Eye({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 469.333 469.333">
      <path
        fill={color}
        d="M234.667 170.667c-35.307 0-64 28.693-64 64s28.693 64 64 64 64-28.693 64-64-28.694-64-64-64z"
      />
      <path
        fill={color}
        d="M234.667 74.667C128 74.667 36.907 141.013 0 234.667c36.907 93.653 128 160 234.667 160 106.773 0 197.76-66.347 234.667-160-36.907-93.654-127.894-160-234.667-160zm0 266.666c-58.88 0-106.667-47.787-106.667-106.667S175.787 128 234.667 128s106.667 47.787 106.667 106.667-47.787 106.666-106.667 106.666z"
      />
    </svg>
  );
}

Eye.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Eye.defaultProps = {
  width: 15,
  height: 16,
  color: colors.purple,
};
