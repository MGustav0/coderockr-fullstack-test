import { Router } from 'express';

import articlesRouter from '@modules/articles/infra/http/routes/articles.routes';
import contactsRouter from '@modules/contacts/infra/http/routes/contacts.routes';

const routes = Router();

routes.use('/articles', articlesRouter);

routes.use('/contacts', contactsRouter);

export default routes;
