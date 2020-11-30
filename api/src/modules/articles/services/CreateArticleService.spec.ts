import FakeArticlesRepository from '@modules/articles/repositories/fakes/FakeArticlesRepository';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import CreateArticleService from '@modules/articles/services/CreateArticleService';

let fakeArticlesRepository: FakeArticlesRepository;
let storageProvider: FakeStorageProvider;

let createArticle: CreateArticleService;

describe('CreateArticle', () => {
  beforeEach(() => {
    fakeArticlesRepository = new FakeArticlesRepository();
    storageProvider = new FakeStorageProvider();

    createArticle = new CreateArticleService(
      fakeArticlesRepository,
      storageProvider,
    );
  });

  it('should be able a new article', async () => {
    const article = await createArticle.execute({
      author: 'Jhon Doe',
      title: 'Qui occaecati vero et quibusdam non',
      resume: 'Saepe quia culpa vero.',
      text: 'Lorem ipsum dolor sit amet.',
      image: 'show01.png',
    });

    expect(article).toHaveProperty('id');
  });

  // it('should not be able to create two articles with the same title', () => {
  //   expect();
  // });
});
