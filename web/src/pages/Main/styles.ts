import styled, { css } from 'styled-components';

interface ICard {
  isBig: boolean;
}

export const Container = styled.div`
  max-width: 1920px;
  max-height: max-content;
  border: none;
`;

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    'SmallCard SmallCard'
    'BigCard BigCard';
  grid-template-columns: 960px 960px;
`;

export const Card = styled.section<ICard>`
  background-color: #ffffff;
  width: 960px;
  height: 320px;
  margin: 160px 0 80px 0;
  display: grid;
  grid-template-areas: 'img PreArticle';
  grid-template-columns: 320px 620px;

  img {
    width: 320px;
    height: 320px;
  }

  ${props =>
    props.isBig &&
    css`
      width: 1280px;
      height: 640px;
      margin-top: 80px;
      display: grid;
      grid-template-areas: 'img PreArticle';
      grid-template-columns: 640px 640px;

      img {
        width: 640px;
        height: 640px;
      }
    `}
`;

export const BigCard = styled.section`
  background-color: #ffffff;
  width: 1280px;
  height: 640px;
  margin-top: 80px;
  display: grid;
  grid-template-areas: 'img PreArticle';
  grid-template-columns: 640px 640px;

  img {
    width: 640px;
    height: 640px;
  }
`;

export const Intro = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
  width: 480px;
  height: 250px;

  span {
    font-size: 24px;
    color: #2d2d2d;
    padding-bottom: 7px;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #f1a10a;
    padding-bottom: 13px;
  }

  p {
    font-size: 24px;
    color: #2d2d2d;
  }

  button {
    width: 24px;
    height: 16px;
    border: none;
    background: none;
    position: relative;
    align-self: flex-end;
    right: -44px;
    bottom: -5px;

    img {
      width: 24px;
      height: 16px;
      align-self: auto;
    }
  }
`;

export const IntroBig = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
  width: 480px;
  height: 315px;

  span {
    font-size: 24px;
    color: #2d2d2d;
    padding-bottom: 7px;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #f1a10a;
    padding-bottom: 13px;
  }

  p {
    font-size: 24px;
    color: #2d2d2d;
  }

  button {
    width: 24px;
    height: 16px;
    border: none;
    background: none;
    position: relative;
    align-self: flex-end;
    right: -44px;
    bottom: -170px;

    img {
      width: 24px;
      height: 16px;
      align-self: auto;
    }
  }
`;
