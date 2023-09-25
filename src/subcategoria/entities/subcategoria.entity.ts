import { categoria } from "src/Categoria/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"subcategoria"})
export class Subcategoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    @Column()
    descripcion: string;

    @ManyToOne(()=> categoria, category =>category.subcategorias)
    categoria: categoria;
}
