import { getRepository, Repository } from 'typeorm';

import IArticlesRepository from '@modules/articles/repositories/IArticlesRepository';
import ICreateArticleDTO from '@modules/articles/dtos/ICreateArticleDTO';

import Article from '@modules/articles/infra/typeorm/entities/Article';

class ArticlesRepository implements IArticlesRepository {
  private ormRepository: Repository<Article>;

  constructor() {
    this.ormRepository = getRepository(Article);
  }

  public async findAll(): Promise<Article[]> {
    const articles = await this.ormRepository.find();

    return articles;
  }

  public async findById(id: string): Promise<Article> {
    const article = await this.ormRepository.findOne({
      where: { id },
    });

    return article;
  }

  public async findByTitle(title: string): Promise<Article | undefined> {
    const findArticle = await this.ormRepository.findOne({
      where: { title },
    });

    return findArticle || null;
  }

  public async create({
    author,
    title,
    text,
    image,
  }: ICreateArticleDTO): Promise<Article> {
    const article = this.ormRepository.create({ author, title, text, image });

    await this.ormRepository.save(article);

    return article;
  }
}

export default ArticlesRepository;
