import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

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

import api from '../../services/apiClient';

interface Article {
  id: string;
  author: string;
  title: string;
  resume: string;
  text: string;
  imageUrl: string;
  // eslint-disable-next-line camelcase
  created_at: Date;
}

const Main: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    api.get<Article[]>(`/articles`).then(response => {
      setArticles(response.data);
    });
  }, []);

  const allArticles = useMemo(() => {
    return articles.filter(article => {
      return article;
    });
  }, [articles]);

  return (
    <Container>
      <Header />

      <Content>
        <SmallCards>
          {allArticles.map(article => (
            <SmallCard key={article.id}>
              <img src={article.imageUrl} alt={article.title} />

              <PreArticleSmall>
                <span>{article.author}</span>

                <h1>{article.title}</h1>

                <p>{article.resume}</p>

                <button type="button">
                  <img src={forwardButton} alt="Go to the article" />
                </button>
              </PreArticleSmall>
            </SmallCard>
          ))}

          {allArticles.map(article => (
            <SmallCard key={article.id}>
              <img src={article.imageUrl} alt={article.title} />

              <PreArticleSmall>
                <span>{article.author}</span>

                <h1>{article.title}</h1>

                <p>{article.resume}</p>

                <button type="button">
                  <img src={forwardButton} alt="Go to the article" />
                </button>
              </PreArticleSmall>
            </SmallCard>
          ))}
        </SmallCards>

        {allArticles.map(article => (
          <BigCard key={article.id}>
            <img src={article.imageUrl} alt={article.title} />

            <PreArticleBig>
              <span>{article.author}</span>

              <h1>{article.title}</h1>

              <p>{article.resume}</p>

              <button type="button">
                <img src={forwardButton} alt="Go to the article" />
              </button>
            </PreArticleBig>
          </BigCard>
        ))}
      </Content>
    </Container>
  );
};

export default Main;
