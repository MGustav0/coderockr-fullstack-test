import { Router } from 'express';

import ContactsController from '@modules/contacts/infra/controllers/ContactsController';

const contactsRouter = Router();

const contactsController = new ContactsController();

contactsRouter.get('/', contactsController.index);

contactsRouter.post('/', contactsController.create);

export default contactsRouter;
