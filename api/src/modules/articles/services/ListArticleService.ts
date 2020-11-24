import { injectable, inject } from 'tsyringe';

import Article from '@modules/articles/infra/typeorm/entities/Article';
import IArticlesRepository from '@modules/articles/repositories/IArticlesRepository';

interface IRequest {
  author: string;
  title: string;
  text: string;
  image: string;
}

@injectable()
class ListArticleService {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: IArticlesRepository,
  ) {}

  public async execute({
    author,
    title,
    text,
    image,
  }: IRequest): Promise<Article[]> {
    const articles = await this.articlesRepository.findAll({
      author,
      title,
      text,
      image,
    });

    return articles;
  }
}

export default ListArticleService;
