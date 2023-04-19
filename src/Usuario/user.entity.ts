import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, ManyToOne,  JoinColumn, OneToMany } from 'typeorm';

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

  @Column()
  rol:string;
  
  @Column({
    nullable:true
  })
  foto: string;
}