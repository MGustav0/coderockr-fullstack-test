import Contact from '@modules/contacts/infra/typeorm/entities/Contact';

import ICreateContactDTO from '@modules/contacts/dtos/ICreateContactDTO';

export default interface IArticlesRepository {
  findAll(data: ICreateContactDTO): Promise<Contact[]>;
  create(data: ICreateContactDTO): Promise<Contact>;
}
