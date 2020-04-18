import styled from 'styled-components';
import { colors, breakpoints } from 'libs/variables';

export const Container = styled.header`
  width: 100%;
  min-height: 64px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.lightGray};
  padding: 19px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (min-width: ${breakpoints.tabletLandscape}) {
    align-items: center;
    height: 64px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (min-width: ${breakpoints.tabletLandscape}) {
    flex-wrap: nowrap;
  }
  h1 {
    padding: 5px 20px 5px 0;
    margin: 0 0 10px 0;
    @media only screen and (min-width: ${breakpoints.tabletLandscape}) {
      border-right: 1px solid ${colors.lightGray};
      margin: 0 10px 0 0;
    }
    a {
      display: block;
      height: 23px;
      width: 135px;
    }
    img {
      width: 100%;
      height: auto;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media only screen and (min-width: ${breakpoints.tabletLandscape}) {
      flex-wrap: nowrap;
    }
    li {
      margin: 10px;
      @media only screen and (min-width: ${breakpoints.tabletLandscape}) {
        margin: 0 10px;
      }
      a {
        font-weight: bold;
        font-size: 15px;
        text-decoration: none;
        color: ${colors.gray};
        margin: 0 10px;
        &.active {
          color: ${colors.black};
        }
      }
    }
  }
`;

export const UserArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  .username {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.darkGray};
    text-align: right;
  }
  .logout {
    border: none;
    background: none;
    color: ${colors.red};
    font-size: 14px;
    margin-top: 4px;
    text-align: right;
  }
`;
