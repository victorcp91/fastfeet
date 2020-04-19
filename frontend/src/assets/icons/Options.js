import React from 'react';
import ProptTypes from 'prop-types';

import { colors } from 'libs/variables';

export default function Options({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 515.555 515.555">
      <path
        fill={color}
        d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"
      />
    </svg>
  );
}

Options.propTypes = {
  width: ProptTypes.number,
  height: ProptTypes.number,
  color: ProptTypes.string,
};

Options.defaultProps = {
  width: 16,
  height: 16,
  color: colors.lightGray,
};
