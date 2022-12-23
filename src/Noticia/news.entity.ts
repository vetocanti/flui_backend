import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { Category } from 'src/Categoria/category.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  contenido: string;

  @Column()
  fecha: Date;

  @OneToMany(() => Category, (category) => {category.Nombre, category.codigo})
  category: Category[];
}