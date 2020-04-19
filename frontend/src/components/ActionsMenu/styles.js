import styled from 'styled-components';

import { colors } from 'libs/variables';

export const Container = styled.ul`
  margin-right: 20px;
  position: relative;

  &:hover {
    ul {
      display: block;
    }
  }
  ul {
    position: absolute;
    right: 0;
    transform: translateX(45%);
    list-style: none;
    display: none;
    padding: 0;
    margin: 0;
    box-shadow: 0px 0px 20px ${colors.lightGray};
    background-color: ${colors.white};
    padding: 5px 15px;
    z-index: 1;
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: -16px;
      left: 50%;
      transform: translate(-50%);
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 8px solid ${colors.white};
    }
    li {
      text-align: left;
      padding: 10px 0;
      white-space: nowrap;
      border-bottom: 1px solid ${colors.lightGray};
      &:last-child {
        border: none;
      }
      button {
        border: none;
        background: none;
        display: flex;
        align-items: center;
        font-size: 16px;
        color: ${colors.gray};
        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
