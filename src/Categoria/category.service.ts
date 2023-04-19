import { async } from "@firebase/util";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryDto } from "./dto/category.dto";
import { categoria } from "./category.entity";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable() 

export class CategoryService {
    constructor( @InjectRepository(categoria)
    private readonly categoriesRepository: Repository<categoria>,)
    {}

    findAll(): Promise<categoria[]> {
        return this.categoriesRepository.find();
    }

    findByName(nombre: string): Promise<categoria> {
        return this.categoriesRepository.findOne({
            where: {
                Nombre:nombre
            }
        });
    }

    add(createCategoryDto: CategoryDto): Promise <categoria> {
        const category = new categoria();
        category.Nombre= createCategoryDto.nombre;
        category.codigo = createCategoryDto.codigo;
        category.descripcion = createCategoryDto.descripcion;

        return this.categoriesRepository.save(category);
    }

    async remove(codigo:string): Promise <void> {
        await this.categoriesRepository.delete(codigo);
    }

     async setDescription(code:string,description:string): Promise <void> {
        let category =this.categoriesRepository.findOne({
            where: {
                codigo:code
            }});
        (await category).descripcion= description; 
    }

   
}