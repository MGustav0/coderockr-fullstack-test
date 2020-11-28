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

  button {
    cursor: pointer;

    background-color: transparent;
    color: #000000;
    border: none;
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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 100%;

  label {
    display: block;
    font-size: 24px;
    font-weight: 400;
    font-weight: bold;
    margin-bottom: 5px;
  }

  button {
    cursor: pointer;

    display: block;
    background-color: #2d2d2d;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 230px;
    height: 60px;
    transition: background-color 0.2s;

    &:hover {
      background: ${lighten(0.2, '#2d2d2d')};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 48px;
  padding: 12px 16px;
  border-radius: 5px;
  border: 2px solid #ddd;
  font-size: 24px;
  color: #444;
  transition: border-color 0.2s;

  &:focus {
    border-color: #111;
  }

  &::placeholder {
    font-size: 24px;
    font-weight: 400;
  }

  .textarea {
    width: 100%;
    height: 200px;
    margin-bottom: 72px;
    padding: 12px 16px;
    border-radius: 5px;
    border: 2px solid #ddd;
    font-size: 24px;
    color: #444;
    transition: border-color 0.2s;

    &::placeholder {
      font-size: 24px;
      font-weight: 400;
    }
  }

  .textarea:focus {
    border-color: #111;
  }
`;
