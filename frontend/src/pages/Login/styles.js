import styled from 'styled-components';

import { colors } from 'libs/variables';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  form {
    background-color: ${colors.white};
    padding: 60px 30px;
    width: 100%;
    max-width: 360px;
    border-radius: 4px;

    label {
      display: block;
      font-size: 14px;
      font-weight: bold;
      color: ${colors.black};
      border-radius: 4px;
    }
    .input-container {
      padding: 5px 0 15px;
      position: relative;
    }
    input,
    button {
      width: 100%;
      height: 45px;
      font-size: 16px;
      border-radius: 4px;
      margin-top: 10px;
    }
    input {
      border: 1px solid ${colors.lightGray};
      color: ${colors.black};
      padding: 0px 12px;
      &::placeholder {
        color: ${colors.gray};
        font-weight: 100;
      }
    }
    span {
      color: ${colors.red};
      font-size: 12px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

export const Logo = styled.img.attrs({ alt: 'FASTFEET', title: 'FASTFEET' })`
  width: 90%;
  display: block;
  margin: 0 auto 40px auto;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background-color: ${colors.darkPurple};
  color: ${colors.white};
  font-weight: bold;
  border: none;
`;
