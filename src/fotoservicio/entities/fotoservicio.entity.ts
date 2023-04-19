import { Service } from "src/service/entities/service.entity";
import { Column, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({name:"fotoservicio"})
export class Fotoservicio {
    @PrimaryGeneratedColumn()
    id:Number;

    @ManyToOne(()=>Service, service =>service.id)
    service:Service

    @Column()
    url:string

    @Column()
    name:string
    
    
}
