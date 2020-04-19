import styled from 'styled-components';

import { colors } from 'libs/variables';

export const Button = styled.button`
  padding: 0 15px;
  background-color: ${(props) => props.backgroundColor || colors.darkPurple};
  border-radius: 4px;
  border: none;
  color: ${(props) => props.color || colors.white};
  font-size: 14px;
  font-weight: bold;
  height: 36px;
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.span`
  display: block;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
