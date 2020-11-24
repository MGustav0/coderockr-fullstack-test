import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ArticlesController from '@modules/articles/infra/http/controllers/ArticlesController';

const articlesRouter = Router();

const articlesController = new ArticlesController();

const upload = multer(uploadConfig.multer);

articlesRouter.get('/:article_id', articlesController.show);

articlesRouter.get('/', articlesController.index);

articlesRouter.post('/', upload.single('image'), articlesController.create);

export default articlesRouter;
