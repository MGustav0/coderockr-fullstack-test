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
class CreateContactService {
  constructor(
    @inject('ContactsRepository')
    private contactsRepository: IContactsRepository,
  ) {}

  public async execute({
    name,
    email,
    phone,
    post,
  }: IRequest): Promise<Contact> {
    const contact = await this.contactsRepository.create({
      name,
      email,
      phone,
      post,
    });

    return contact;
  }
}

export default CreateContactService;
