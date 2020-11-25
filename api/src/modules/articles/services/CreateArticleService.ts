import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Article from '@modules/articles/infra/typeorm/entities/Article';
import IArticlesRepository from '@modules/articles/repositories/IArticlesRepository';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

interface IRequest {
  author: string;
  title: string;
  resume;
  text: string;
  image: string;
}

@injectable()
class CreateArticleService {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: IArticlesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    author,
    title,
    resume,
    text,
    image,
  }: IRequest): Promise<Article> {
    const findSameArticle = await this.articlesRepository.findByTitle(title);

    if (findSameArticle) {
      throw new AppError('This article is already posted', 400);
    }

    await this.storageProvider.saveFile(image);

    const article = await this.articlesRepository.create({
      author,
      title,
      resume,
      text,
      image,
    });

    return article;
  }
}

export default CreateArticleService;
