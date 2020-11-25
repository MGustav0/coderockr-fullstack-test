import React, { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';

import Header from '../../components/Header';

import articleImage from '../../assets/show01.png';

import { Container, ArticleContainer, Intro, Text } from './styles';

import api from '../../services/apiClient';

interface Article {
  articleId: string;
}

const Article: React.FC = () => {
  // const [articleDate, setArticleDate] = useState(new Date());

  // useEffect(() => {
  //   api.get(`/articles/${articleId}`, {
  //     params: {
  //       id: articleDate.
  //     }
  //   });

  //   console.log('O artigo é: ', articleId);
  // }, [articleDate]);

  // const date = useMemo(() => {
  //   return format();
  // });

  return (
    <Container>
      <Header />

      <ArticleContainer>
        <img src={articleImage} alt="Rockr Blog" />

        <Intro>
          <time>Jan 6, 2018</time>

          <span>Kelsi Monahan</span>

          <h1>Qui occaecati vero et quibusdam non</h1>
        </Intro>

        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            eleifend ligula in nulla vulputate pharetra. Proin condimentum,
            libero quis feugiat pharetra, ante arcu faucibus felis, vel
            elementum magna felis in libero. Aliquam id ultricies purus. Etiam
            at ullamcorper enim. Cras vel elit ac lorem condimentum dignissim.
            Ut rhoncus neque finibus erat congue, id tempus lacus hendrerit.
            Curabitur non faucibus diam. Sed id ante id dolor euismod varius eu
            vel velit. Maecenas id ligula quis enim blandit gravida a et lorem.
            Vivamus eu turpis eu leo malesuada dictum non ac tortor.
            Pellentesque volutpat mollis leo tincidunt sollicitudin. Suspendisse
            porta imperdiet sapien nec euismod. Quisque ac dictum sem. Cras in
            porttitor lacus, vitae convallis elit. Maecenas in fermentum erat, a
            rutrum nulla. Mauris quis dolor sit amet metus mollis tempor eu quis
            turpis. Vestibulum vel eleifend magna, eget tempor nulla. Donec
            bibendum mauris aliquam elit vulputate, id vestibulum lorem sodales.
            Nullam eget erat mauris. Etiam sit amet sollicitudin magna. Ut
            tortor nisi, mollis viverra tempus consequat, interdum non mi.
            Quisque bibendum, lacus sit amet rhoncus malesuada.
          </p>
        </Text>
      </ArticleContainer>
    </Container>
  );
};

export default Article;
