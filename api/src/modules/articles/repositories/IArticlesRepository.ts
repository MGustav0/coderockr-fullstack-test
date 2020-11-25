import Article from '@modules/articles/infra/typeorm/entities/Article';

import ICreateArticleDTO from '@modules/articles/dtos/ICreateArticleDTO';

export default interface IArticlesRepository {
  findAll(data: ICreateArticleDTO): Promise<Article[]>;
  findByTitle(title: string): Promise<Article | undefined>;
  findById(articleId: string): Promise<Article | undefined>;
  create(data: ICreateArticleDTO): Promise<Article>;
}
