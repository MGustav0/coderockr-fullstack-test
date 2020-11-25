export default interface ICreateArticleDTO {
  articleId?: string;
  author: string;
  title: string;
  resume: string;
  text: string;
  image: string;
  date?: Date;
}
