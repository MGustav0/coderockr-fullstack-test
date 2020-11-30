import { v4 as uuidv4 } from 'uuid';

import IArticlesRepository from '@modules/articles/repositories/IArticlesRepository';
import ICreateArticleDTO from '@modules/articles/dtos/ICreateArticleDTO';

import Article from '@modules/articles/infra/typeorm/entities/Article';

class FakeArticlesRepository implements IArticlesRepository {
  private articles: Article[] = [];

  public async findAll(): Promise<Article[]> {
    const findArticles = this.articles.map(article => article);

    return findArticles;
  }

  public async findById(id: string): Promise<Article> {
    const findArticle = this.articles.find(article => article.id === id);

    return findArticle;
  }

  public async findByTitle(title: string): Promise<Article | undefined> {
    const findArticle = this.articles.find(article => article.title === title);

    return findArticle || null;
  }

  public async create({
    author,
    title,
    resume,
    text,
    image,
  }: ICreateArticleDTO): Promise<Article> {
    const article = new Article();

    Object.assign(article, {
      id: uuidv4(),
      author,
      title,
      resume,
      text,
      image,
    });

    this.articles.push(article);

    return article;
  }
}

export default FakeArticlesRepository;
