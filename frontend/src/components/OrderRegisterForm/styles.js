import styled from 'styled-components';

import { colors } from 'libs/variables';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  .buttons {
    display: flex;
    button:first-child {
      margin-right: 20px;
    }
  }
`;

export const FieldsContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 30px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Selects = styled.div`
  display: flex;
  .select-container {
    flex: 0.5;
    &:first-child {
      margin-right: 30px;
    }
    & > div {
      width: 100%;
    }
    & div {
      color: ${colors.gray};
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  input {
    width: 100%;
    height: 38px;
    border-radius: 4px;
    border: 1px solid ${colors.lightGray};
    font-size: 16px;
    padding: 12px 15px;
    color: ${colors.gray};
  }
`;
