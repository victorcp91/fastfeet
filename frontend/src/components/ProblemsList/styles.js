import styled from 'styled-components';

import { colors } from 'libs/variables';

export const Container = styled.div`
  margin: 10px 0;
`;

export const Header = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  font-weight: bold;
  font-size: 16px;
  color: black;
  padding: 0;
  margin: 0;
  & > li {
    padding: 18px 25px;
    &.id {
      flex: 0.8 0.8 0;
    }
    &.problem {
      flex: 2 2 0;
    }
    &.actions {
      flex: 0.3 0.3 0;
    }
    &:last-child {
      text-align: right;
    }
  }
`;

export const Content = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const Order = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  & > li {
    padding: 18px 25px;
    background-color: ${colors.white};
    color: ${colors.darkGray};
    margin-bottom: 20px;
    border-radius: 4px;

    &.id {
      flex: 0.8 0.8 0;
    }
    &.problem {
      flex: 2 2 0;
    }
    &.actions {
      flex: 0.3 0.3 0;
    }
    &:last-child {
      text-align: right;
    }
  }
`;
