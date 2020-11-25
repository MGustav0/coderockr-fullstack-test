import { injectable, inject } from 'tsyringe';

import Contact from '@modules/contacts/infra/typeorm/entities/Contact';
import IContactsRepository from '@modules/contacts/repositories/IContactsRepository';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  post: string;
}

@injectable()
class ListContactsService {
  constructor(
    @inject('ContactsRepository')
    private contactsRepository: IContactsRepository,
  ) {}

  public async execute({
    name,
    email,
    phone,
    post,
  }: IRequest): Promise<Contact[]> {
    const contacts = await this.contactsRepository.findAll({
      name,
      email,
      phone,
      post,
    });

    return contacts;
  }
}

export default ListContactsService;
