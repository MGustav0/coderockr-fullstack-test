import { container } from 'tsyringe';

import './providers';

import IArticlesRepository from '@modules/articles/repositories/IArticlesRepository';
import ArticlesRepository from '@modules/articles/infra/typeorm/repositories/ArticlesRepository';

import IContactsRepository from '@modules/contacts/repositories/IContactsRepository';
import ContactsRepository from '@modules/contacts/infra/typeorm/repositories/ContactsRepository';

container.registerSingleton<IArticlesRepository>(
  'ArticlesRepository',
  ArticlesRepository,
);

container.register<IContactsRepository>(
  'ContactsRepository',
  ContactsRepository,
);
