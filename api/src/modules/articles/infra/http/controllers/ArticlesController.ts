import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ShowArticleService from '@modules/articles/services/ShowArticleService';
import ListArticlesService from '@modules/articles/services/ListArticlesService';
import CreateArticleService from '@modules/articles/services/CreateArticleService';

class ArticlesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showArticle = container.resolve(ShowArticleService);

    const { articleId } = request.params;

    const article = await showArticle.execute({ articleId });

    return response.json(classToClass(article));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listArticles = container.resolve(ListArticlesService);

    const { author, title, resume, text, image, date } = request.body;

    const articles = await listArticles.execute({
      author,
      title,
      resume,
      text,
      image,
      date,
    });

    return response.json(classToClass(articles));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { author, title, resume, text } = request.body;

    const createArticle = container.resolve(CreateArticleService);

    const article = await createArticle.execute({
      author,
      title,
      resume,
      text,
      image: request.file.filename,
    });

    return response.json(classToClass(article));
  }
}

export default ArticlesController;
