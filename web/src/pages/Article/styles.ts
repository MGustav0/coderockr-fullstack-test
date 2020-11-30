import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  max-height: max-content;
`;

export const ArticleContainer = styled.div`
  background-color: #ffffff;
  margin-top: 200px;
  margin-bottom: 218px;
  width: 1280px;
  border: none;
  display: grid;
  grid-template-areas:
    'img Intro'
    'Text Text';
  grid-template-columns: 1fr 1fr;

  img {
    width: 640px;
    height: 640px;
  }

  @media screen and (max-width: 1280px) {
    width: 960px;
    grid-template-columns: 320px 620px;

    img {
      width: 320px;
      height: 320px;
    }
  }

  @media screen and (max-width: 540px) {
    margin-top: 100px;
    width: 280px;
    grid-template-columns: 1fr 1fr;

    img {
      width: 140px;
      height: 140px;
    }
  }
`;

export const Intro = styled.div`
  width: 400px;
  height: 236px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;

  time {
    font-size: 18px;
    color: #032937;
    margin-bottom: 44px;
  }

  span {
    font-size: 24px;
    color: #2d2d2d;
    margin-bottom: 61px;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #f1a10a;
  }

  @media screen and (max-width: 540px) {
    width: 100px;
    height: 100px;

    time {
      font-size: 7px;
      margin-bottom: 9px;
    }

    span {
      font-size: 10px;
      margin-bottom: 13px;
    }

    h1 {
      font-size: 12px;
    }
  }
`;

export const Text = styled.div`
  width: 1280px;
  grid-column: 1/3;

  p {
    width: 780px;
    margin: 0 auto;
    margin-top: 124px;
    margin-bottom: 168px;
    align-self: center;
    font-size: 24px;
    color: #2d2d2d;
  }

  @media screen and (max-width: 1279px) {
    p {
      margin-left: 90px;
    }
  }

  @media screen and (max-width: 540px) {
    width: 280px;
    grid-column: 1/3;

    p {
      width: 250px;
      margin-top: 27px;
      margin-bottom: 36px;
      margin-left: 15px;
      margin-right: 15px;
      font-size: 16px;
    }
  }
`;
