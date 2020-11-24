import { injectable, inject } from 'tsyringe';

import Article from '@modules/articles/infra/typeorm/entities/Article';
import IArticlesRepository from '@modules/articles/repositories/IArticlesRepository';

interface IRequest {
  article_id: string;
}

@injectable()
class ShowArticleService {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: IArticlesRepository,
  ) {}

  public async execute({ article_id }: IRequest): Promise<Article> {
    const article = await this.articlesRepository.findById(article_id);

    return article;
  }
}

export default ShowArticleService;
