import { categoria } from "src/Categoria/category.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"subcategoria"})
export class Subcategoria {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @ManyToOne(()=> categoria, category =>category.subcategorias)
    categoria: categoria;
}
