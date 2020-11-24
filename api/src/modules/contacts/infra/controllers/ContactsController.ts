import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListArticlesService from '@modules/contacts/services/ListContactService';
import CreateContactService from '@modules/contacts/services/CreateContactService';

class ContactsController {
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
    const { name, email, phone, post } = request.body;

    const createContact = container.resolve(CreateContactService);

    const article = await createContact.execute({
      name,
      email,
      phone,
      post,
    });

    return response.json(article);
  }
}

export default ContactsController;
