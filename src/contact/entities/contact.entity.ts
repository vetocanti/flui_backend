import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"contacto"})
export class Contact {

@Column()
nombre:string;

@PrimaryColumn()
email:string;

@Column()
comentario: string;
    
}
