import React, { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';

import Header from '../../components/Header';

import { Container, ArticleContainer, Intro, Text } from './styles';

import api from '../../services/apiClient';

interface IArticle {
  id: string;
  author: string;
  title: string;
  text: string;
  imageUrl: string;
  // eslint-disable-next-line camelcase
  created_at: Date;
}

const Article: React.FC = () => {
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    // api.get<IArticle>(`/articles/${article?.id}`).then(response => {
    //   setArticle(response.data);
    //   console.log(`O que veio? `, response.data);
    // });
    // console.log(`O que veio? `, article?.id);
  }, []);

  return (
    <Container>
      <Header />

      <ArticleContainer>
        <img src={article?.imageUrl} alt={article?.title} />

        <Intro>
          <time>{article?.created_at}</time>

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
