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
  display: flex;
  max-width: 1920px;
  height: 100px;
  margin: 0 auto;
  align-items: center;
`;

export const Home = styled.div`
  margin-right: auto;
  margin-left: 320px;
  flex-direction: row;
  font-size: 32px;
  font-weight: 500;

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
      color: ${darken(0.3, '#ffffff')};
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 320px;
  font-size: 32px;
  font-weight: 500;

  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: ${darken(0.3, '#ffffff')};
    }
  }
`;

export const Posts = styled.div`
  margin-right: 118px;
`;

export const Contact = styled.div`
  font-size: 32px;
  font-weight: 500;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    color: ${darken(0.3, '#ffffff')};
  }
`;
