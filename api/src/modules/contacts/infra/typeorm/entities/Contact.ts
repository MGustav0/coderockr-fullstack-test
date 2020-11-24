import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('contacts')
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  post: string;
}

export default Contact;
