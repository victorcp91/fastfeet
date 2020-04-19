import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'libs/variables';

function Arrow({ width, height, color }) {
  return (
    <svg height={height} width={width} viewBox="100 0 320 512">
      <path
        fill={color}
        d="M352 128.4L319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z"
      />
    </svg>
  );
}

Arrow.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

Arrow.defaultProps = {
  width: 15,
  height: 22,
  color: colors.white,
};

export default Arrow;
