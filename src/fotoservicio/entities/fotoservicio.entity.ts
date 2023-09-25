import { Service } from "src/service/entities/service.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity({name:"fotoservicio"})
export class Fotoservicio {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(() => Service, service => service.photoservices)
    service: Service;

    @Column()
    url:string

    @Column()
    name:string
}
