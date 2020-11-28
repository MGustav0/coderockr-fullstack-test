import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import Header from '../../components/Header';

import { Container, ArticleContainer, Intro, Text } from './styles';

import api from '../../services/apiClient';

interface ArticleParams {
  id: string;
}

interface Article {
  id: string;
  author: string;
  title: string;
  text: string;
  image: string;
  imageUrl: string;
  // eslint-disable-next-line camelcase
  created_at: Date;
  dateFormatted: string;
}

const Article: React.FC = () => {
  const { params } = useRouteMatch<ArticleParams>();

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    api.get(`articles/${params.id}`).then(response => {
      const articleFormatted = {
        ...response.data,
        dateFormatted: format(
          parseISO(response.data.created_at),
          'MMM dd, yyyy',
        ),
      };

      setArticle(articleFormatted);
    });
  }, [params.id]);

  return (
    <Container>
      <Header />

      <ArticleContainer>
        <img src={article?.imageUrl} alt={article?.title} />

        <Intro>
          <time>{article?.dateFormatted}</time>
          <span>{article?.author}</span>
          <h1>{article?.title}</h1>
        </Intro>

        <Text>
          <p>{article?.text}</p>
        </Text>
      </ArticleContainer>
    </Container>
  );
};

export default Article;
