import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('articles')
class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  image: string;
}

export default Article;
