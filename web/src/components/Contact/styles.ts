import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  box-sizing: border-box;
  border: none;

  background-color: #ffffff;
  color: #000000;
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 1113px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    color: #000000;
    outline: none;
    width: 28px;
    height: 28px;

    align-self: flex-end;
    margin-right: 51px;
    margin-top: 52px;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #f1a10a;
    align-self: center;
    margin-bottom: 49px;
  }

  form {
    width: 100%;
    max-width: 565px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .submitButton {
      display: block;
      background-color: #2d2d2d;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      outline: none;
      width: 230px;
      height: 60px;
      transition: background-color 0.2s;

      align-self: center;

      &:hover {
        background: ${lighten(0.2, '#2d2d2d')};
      }
    }
  }
`;
