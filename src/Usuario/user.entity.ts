import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, ManyToOne,  JoinColumn, OneToMany } from 'typeorm';
import { Category } from 'src/Categoria/category.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @PrimaryColumn()
  nombreUsuario: string;

  @Column()
  correoElectronico: string;
  
  @Column()
  clave: string;

  @Column()
  fechaNacimiento: Date;

  @Column()
  preferencias: string;

  @OneToMany(() => Category, (category) => {category.Nombre, category.codigo})
  category: Category[];
  
  @Column()
  Foto: Blob;
}