import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListContactsService from '@modules/contacts/services/ListContactsService';
import CreateContactService from '@modules/contacts/services/CreateContactService';

class ContactsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listContacts = container.resolve(ListContactsService);

    const { name, email, phone, post } = request.body;

    const contacts = await listContacts.execute({
      name,
      email,
      phone,
      post,
    });

    return response.json(contacts);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, post } = request.body;

    const createContact = container.resolve(CreateContactService);

    const contact = await createContact.execute({
      name,
      email,
      phone,
      post,
    });

    return response.json(contact);
  }
}

export default ContactsController;
