import { injectable, inject } from 'tsyringe';

import Article from '@modules/articles/infra/typeorm/entities/Article';
import IArticlesRepository from '@modules/articles/repositories/IArticlesRepository';

interface IRequest {
  author: string;
  title: string;
  resume: string;
  text: string;
  image: string;
}

@injectable()
class ListArticlesService {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: IArticlesRepository,
  ) {}

  public async execute({
    author,
    title,
    resume,
    text,
    image,
  }: IRequest): Promise<Article[]> {
    const articles = await this.articlesRepository.findAll({
      author,
      title,
      resume,
      text,
      image,
    });

    return articles;
  }
}

export default ListArticlesService;
