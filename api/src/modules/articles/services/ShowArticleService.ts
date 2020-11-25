import { injectable, inject } from 'tsyringe';

import Article from '@modules/articles/infra/typeorm/entities/Article';
import IArticlesRepository from '@modules/articles/repositories/IArticlesRepository';

interface IRequest {
  articleId: string;
}

@injectable()
class ShowArticleService {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: IArticlesRepository,
  ) {}

  public async execute({ articleId }: IRequest): Promise<Article> {
    const article = await this.articlesRepository.findById(articleId);

    return article;
  }
}

export default ShowArticleService;
