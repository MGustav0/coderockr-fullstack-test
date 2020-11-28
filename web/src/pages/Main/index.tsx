import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import forwardButton from '../../assets/forwardButton.svg';

import { Container, Content, Card } from './styles';

import api from '../../services/apiClient';

interface Article {
  id: string;
  author: string;
  title: string;
  resume: string;
  text: string;
  imageUrl: string;
}

const Main: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    api.get<Article[]>(`/articles`).then(response => {
      setArticles(response.data);
    });
  }, []);

  const handleAllArticles = useMemo(() => {
    return articles.filter(article => {
      return article;
    });
  }, [articles]);

  return (
    <Container>
      <Header />

      <Content>
        {handleAllArticles.map((article, index) => {
          const enlarge = (index + 1) % 3 === 0;
          const isLeft = (index + 1) % 2 === 0 && (index + 1) % 3 === 0;

          return (
            <Card
              key={article.id}
              leftCard={isLeft}
              enlargeCard={isLeft || enlarge}
            >
              <img src={article.imageUrl} alt={article.title} />
              <div>
                <span>{article.author}</span>
                <h1>{article.title}</h1>
                <p>{article.resume}</p>

                <Link to={`/articles/${article.id}`}>
                  <img src={forwardButton} alt="Go to the article" />
                </Link>
              </div>
            </Card>
          );
        })}
      </Content>
    </Container>
  );
};

export default Main;
