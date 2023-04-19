import { Entity, Column, PrimaryGeneratedColumn,PrimaryColumn, ManyToOne,  JoinColumn, OneToMany, PrimaryColumnCannotBeNullableError } from 'typeorm';
import { categoria } from 'src/Categoria/category.entity';
import { Express } from 'express';
@Entity()
export class empresa {

  @Column()
  nombre: string;

  @PrimaryColumn({
  })
  nombreusuario: string;

  @PrimaryColumn({
  })
  email: string;
  
  @Column({
    name:"contraseña"
  })
  clave: string;

  @Column()
  descripcion: string;



  @OneToMany(() => categoria, (category) => {category.codigo})
  category: categoria[];
  
  @Column(

  )
  foto: string;
}