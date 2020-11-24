import { getRepository, Repository } from 'typeorm';

import IContactsRepository from '@modules/contacts/repositories/IContactsRepository';
import ICreateContactDTO from '@modules/contacts/dtos/ICreateContactDTO';

import Contact from '@modules/contacts/infra/typeorm/entities/Contact';

class ContactsRepository implements IContactsRepository {
  private ormRepository: Repository<Contact>;

  constructor() {
    this.ormRepository = getRepository(Contact);
  }

  public async findAll(): Promise<Contact[]> {
    const contacts = await this.ormRepository.find();

    return contacts;
  }

  public async create({
    name,
    email,
    phone,
    post,
  }: ICreateContactDTO): Promise<Contact> {
    const article = this.ormRepository.create({ name, email, phone, post });

    await this.ormRepository.save(article);

    return article;
  }
}

export default ContactsRepository;
