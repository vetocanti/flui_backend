import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  nombreUsuario: string;

  @Column()
  correoElectronico: string;
  
  @Column()
  clave: string;

  @Column()
  fechaNacimiento: Date;

  @Column()
  preferencias: string;

  @Column()
  CategoriaNombre: string;
  
  @Column()
  CategoriaCodigo: string;
  
  @Column()
  Foto: Blob;
}