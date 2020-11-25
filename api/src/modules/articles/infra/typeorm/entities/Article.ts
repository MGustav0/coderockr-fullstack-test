import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';

@Entity('articles')
class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  resume: string;

  @Column()
  text: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'imageUrl' })
  getImageUrl(): string {
    return `${process.env.APP_API_URL}/files/${this.image}`;
  }
}

export default Article;
