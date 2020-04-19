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
    &.id,
    &.actions {
      flex: 0.5 0.5 0px;
    }
    &.recipient,
    &.deliveryman,
    &.city,
    &.state,
    &.status {
      flex: 1 1 0px;
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

    &.id,
    &.actions {
      flex: 0.5 0.5 0;
    }
    &.recipient,
    &.deliveryman,
    &.city,
    &.state,
    &.status {
      flex: 1 1 0;
    }
    &:last-child {
      text-align: right;
    }
  }
`;
