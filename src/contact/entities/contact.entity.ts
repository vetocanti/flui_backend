import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"contacto"})
export class Contact {

@Column()
Nombre:string;

@PrimaryColumn({name: "correo electronico"})
email:string;

@Column()
Comentario: string;
    
}
