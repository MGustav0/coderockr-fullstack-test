import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import articleImage from '../../assets/show01.png';
import forwardButton from '../../assets/forwardButton.svg';

import {
  Container,
  Content,
  SmallCard,
  SmallCards,
  BigCard,
  PreArticleSmall,
  PreArticleBig,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <SmallCards>
          <SmallCard>
            <img src={articleImage} alt="Rockr Blog" />

            <PreArticleSmall>
              <span>Kelsi Monahan</span>

              <h1>Qui occaecati vero et quibusdam non</h1>

              <p>
                Saepe quia culpa vero. Velit numquam corporis nihil sint enim
                exercitationem. Rem nulla illum sint et id dolore voluptas{' '}
              </p>

              <button type="button">
                <img src={forwardButton} alt="Go to the article" />
              </button>
            </PreArticleSmall>
          </SmallCard>

          <SmallCard>
            <img src={articleImage} alt="Rockr Blog" />

            <PreArticleSmall>
              <span>Kelsi Monahan</span>

              <h1>Qui occaecati vero et quibusdam non</h1>

              <p>
                Saepe quia culpa vero. Velit numquam corporis nihil sint enim
                exercitationem. Rem nulla illum sint et id dolore voluptas{' '}
              </p>

              <button type="button">
                <img src={forwardButton} alt="Go to the article" />
              </button>
            </PreArticleSmall>
          </SmallCard>
        </SmallCards>

        <BigCard>
          <img src={articleImage} alt="Rockr Blog" />

          <PreArticleBig>
            <span>Kelsi Monahan</span>

            <h1>Qui occaecati vero et quibusdam non</h1>

            <p>
              Saepe quia culpa vero. Velit numquam corporis nihil sint enim
              exercitationem. Rem nulla illum sint et id dolore voluptas{' '}
            </p>

            <button type="button">
              <img src={forwardButton} alt="Go to the article" />
            </button>
          </PreArticleBig>
        </BigCard>
      </Content>
    </Container>
  );
};

export default Main;
