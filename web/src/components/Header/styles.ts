import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  position: fixed;
  margin-top: 0px !important;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  height: 100px;
`;

export const HeaderContainer = styled.div`
  background: #2d2d2d;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  width: 1280px;
  height: 100px;
  margin: auto;
  align-items: center;

  @media screen and (max-width: 1280px) {
    width: 960px;
  }

  @media screen and (max-width: 540px) {
    width: 539px;
    height: 50px;
  }
`;

export const Home = styled.div`
  font-size: 32px;
  font-weight: 500;
  justify-self: flex-start;

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
      color: ${darken(0.3, '#ffffff')};
    }
  }

  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 32px;
  font-weight: 500;

  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: ${darken(0.3, '#ffffff')};
    }
  }

  @media screen and (max-width: 1920px) {
  }

  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
`;

export const Posts = styled.div`
  justify-self: flex-end;
`;

export const Contact = styled.button`
  font-size: 32px;
  font-weight: 500;
  color: #ffffff;

  background-color: transparent;
  border: none;

  justify-self: flex-end;

  cursor: pointer;

  &:hover {
    color: ${darken(0.3, '#ffffff')};
  }

  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
`;
