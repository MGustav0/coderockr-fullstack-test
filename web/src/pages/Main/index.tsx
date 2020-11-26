import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import forwardButton from '../../assets/forwardButton.svg';

import { Container, Content, Card, BigCard, Intro, IntroBig } from './styles';

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
  const [isBig, setIsBig] = useState(false);

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

  const handleBigCards = useCallback(() => {
    const bigCards = articles.length % 3;

    if (bigCards === 0) {
      setIsBig(true);
    }

    return setIsBig;
  }, [articles.length]);

  return (
    <Container>
      <Header />

      <Content>
        {allArticles.map(article =>
          handleBigCards() ? (
            <Card key={article.id} isBig={isBig}>
              <img src={article.imageUrl} alt={article.title} />
              <Intro>
                <span>{article.author}</span>
                <h1>{article.title}</h1>
                <p>{article.resume}</p>

                <button type="button">
                  <img src={forwardButton} alt="Go to the article" />
                </button>
              </Intro>
            </Card>
          ) : (
            <Card key={article.id} isBig={isBig}>
              <img src={article.imageUrl} alt={article.title} />
              <Intro>
                <span>{article.author}</span>
                <h1>{article.title}</h1>
                <p>{article.resume}</p>

                <button type="button">
                  <img src={forwardButton} alt="Go to the article" />
                </button>
              </Intro>
            </Card>
          ),
        )}
      </Content>
    </Container>
  );
};

export default Main;
