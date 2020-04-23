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
  span {
    font-size: 14px;
    color: ${colors.red};
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
