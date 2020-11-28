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
`;

export const Intro = styled.div`
  width: 400px;
  height: 236px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
`;

export const Text = styled.div`
  width: 1280px;
  grid-column: 1/3;

  p {
    width: 780px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 124px;
    margin-bottom: 168px;
    align-self: center;
    font-size: 24px;
    color: #2d2d2d;
  }
`;
