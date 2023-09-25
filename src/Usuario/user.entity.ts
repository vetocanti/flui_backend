import { Entity, Column,PrimaryColumn} from 'typeorm';

@Entity({name:'usuario'})
export class User {

  @Column()
  nombre: string;

  @PrimaryColumn()
  nombreusuario: string;

  @Column()
  email: string;
  
  @Column()
  clave: string;

  @Column()
  fechadenacimiento: Date;

  @Column()
  preferencias: string;

  @Column()
  rol:string;
  
  @Column({
    nullable:true,
    name:"Foto"
  })
  foto: string;
}