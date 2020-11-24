import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowArticleService from '@modules/articles/services/ShowArticleService';
import ListArticlesService from '@modules/articles/services/ListArticlesService';
import CreateArticleService from '@modules/articles/services/CreateArticleService';

class ArticlesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showArticle = container.resolve(ShowArticleService);

    const { article_id } = request.params;

    const article = await showArticle.execute({ article_id });

    return response.json(article);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listArticles = container.resolve(ListArticlesService);

    const { author, title, text, image } = request.body;

    const articles = await listArticles.execute({
      author,
      title,
      text,
      image,
    });

    return response.json(articles);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { author, title, text } = request.body;

    const createArticle = container.resolve(CreateArticleService);

    const article = await createArticle.execute({
      author,
      title,
      text,
      image: request.file.filename,
    });

    return response.json(article);
  }
}

export default ArticlesController;
