import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, ManyToOne,  JoinColumn, OneToMany, PrimaryColumnCannotBeNullableError } from 'typeorm';
import { Category } from 'src/Categoria/category.entity';
import { Blob } from 'buffer';
import { Express } from 'express';
@Entity({name:"empresa"})
export class Company {

  @Column()
  nombre: string;

  @PrimaryColumn({
    name:"Nombre Usuario"
  })
  nombreUsuario: string;

  @Column({
    name:"correo electrónico"
  })
  correoElectronico: string;
  
  @Column({
    name:"Contraseña"
  })
  clave: string;

  @Column({
    name:"Descripcion Empresa"
  })
  descripcion: string;

  @Column({
    name:"Telefono"
  })
  telefono:string;

  //@OneToMany(() => Category, (category) => {category.Nombre, category.codigo}, PrimaryColumnCannotBeNullableError)
  //category: Category[];
  
  /*@Column({
    nullable:true
  })
  Foto: Express.Multer.File;*/
}