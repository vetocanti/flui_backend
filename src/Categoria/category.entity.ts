import { User } from 'src/Usuario/user.entity';
import { News } from 'src/Noticia/news.entity';
import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, ManyToOne} from 'typeorm';
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  Nombre: string;

  @PrimaryColumn()
  codigo: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => User, (user) => user.category)
  user: User

  @ManyToOne(() => News, (news) => news.category)
  news: User
  
}