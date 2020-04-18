import styled from 'styled-components';

import { colors } from 'libs/variables';

export const Container = styled.div`
  background: ${colors.white};
  width: 237px;
  padding: 12px 16px;
  border: 1px solid ${colors.lightGray};
  display: flex;
  align-itens: center;
  position: relative;

  svg {
    margin-right: 5px;
  }
  input {
    background: none;
    border: none;
    color: ${colors.lightGray};
    font-size: 14px;
    width: 100%;
  }
`;
