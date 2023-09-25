import { empresa } from "src/Empresa/company.entity";
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn,Entity } from "typeorm";
import { categoria } from "src/Categoria/category.entity";
import { Fotoservicio } from "src/fotoservicio/entities/fotoservicio.entity";
@Entity({name:"servicio"})
export class Service {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo:string;

    @Column()
    detalle:string;
    
    @ManyToOne(()=>empresa, empresa => {empresa.services})
    empresa :empresa

    @Column()
    precio:number;


    @ManyToOne(() => categoria, categoria=>categoria.codigo)
    categoria:categoria;


    @OneToMany(()=> Fotoservicio, (photoservice) => photoservice.service)
    photoservices: Fotoservicio[];
    
}
