import styled, { css } from 'styled-components';

interface ContainerProps {
  enlargeCard?: boolean;
  leftCard?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  max-height: max-content;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 80px;
`;

export const Card = styled.section<ContainerProps>`
  :nth-child(-n + 2) {
    margin-top: 160px;
  }

  background-color: #ffffff;
  width: 960px;
  height: 320px;
  display: grid;
  grid-template-areas: 'img PreArticle';
  grid-template-columns: 320px 620px;

  img {
    width: 320px;
    height: 320px;
  }

  div {
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

    a {
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
  }

  ${props =>
    props.enlargeCard &&
    css`
      grid-column: 1/3;
      width: 1280px;
      height: 640px;
      display: grid;
      grid-template-areas: 'img PreArticle';
      grid-template-columns: 640px 640px;

      img {
        width: 640px;
        height: 640px;
      }

      div {
        height: 315px;

        span {
          padding-bottom: 24px;
        }

        a {
          bottom: -170px;
        }
      }
    `}

  ${props =>
    props.leftCard &&
    css`
      grid-column: 1/3;
      width: 1280px;
      height: 640px;
      display: grid;
      grid-template-areas: 'img PreArticle';
      grid-template-columns: 640px 640px;

      transform: translate(50%);

      img {
        width: 640px;
        height: 640px;
      }

      div {
        height: 315px;

        span {
          padding-bottom: 24px;
        }

        a {
          bottom: -170px;
        }
      }
    `}

  @media screen and (max-width: 1920px) {
    :nth-child(1) {
      margin-top: 160px;
    }

    :nth-child(2) {
      margin-top: 80px;
    }

    grid-column: 1/3;
    width: 1280px;
    height: 640px;
    display: grid;
    grid-template-areas: 'img PreArticle';
    grid-template-columns: 640px 640px;

    img {
      width: 640px;
      height: 640px;
    }

    div {
      height: 315px;

      span {
        padding-bottom: 24px;
      }

      a {
        bottom: -170px;
      }
    }
  }

  @media screen and (max-width: 1280px) {
    :first-child {
      margin-top: 160px;
    }

    :nth-child(2) {
      margin-top: 80px;
    }

    background-color: #ffffff;
    width: 960px;
    height: 320px;
    display: grid;
    grid-template-areas: 'img PreArticle';
    grid-template-columns: 320px 620px;

    img {
      width: 320px;
      height: 320px;
    }

    div {
      height: 250px;

      span {
        padding-bottom: 7px;
      }

      a {
        bottom: -5px;
      }
    }
  }

  @media screen and (max-width: 540px) {
    :first-child {
      margin-top: 80px;
    }

    :nth-child(2) {
      margin-top: 40px;
    }

    background-color: #ffffff;
    width: 280px;
    height: 530px;
    display: grid;
    grid-template-columns: 280px;
    grid-template-rows: 280px 530px;

    img {
      width: 280px;
      height: 280px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-self: center;
      margin: 0 auto;
      width: 206px;
      height: 396px;

      span {
        font-size: 19px;
        color: #2d2d2d;
        padding-bottom: 7px;
      }

      h1 {
        font-size: 29px;
        font-weight: 700;
        color: #f1a10a;
        padding-bottom: 13px;
      }

      p {
        font-size: 19px;
        color: #2d2d2d;
      }

      a {
        width: 24px;
        height: 16px;
        border: none;
        background: none;
        position: relative;
        align-self: flex-end;
        /* right: -44px;
        bottom: -5px; */

        img {
          width: 24px;
          height: 16px;
          align-self: auto;
        }
      }
    }
  }
`;
