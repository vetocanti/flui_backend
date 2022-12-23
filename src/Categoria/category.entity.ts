import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn} from 'typeorm';
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
  
}