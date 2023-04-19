import { Injectable } from '@nestjs/common';
import { CreateSubcategoriaDto } from './dto/create-subcategoria.dto';
import { UpdateSubcategoriaDto } from './dto/update-subcategoria.dto';
import { Subcategoria } from './entities/subcategoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { categoria } from 'src/Categoria/category.entity';

@Injectable()
export class SubcategoriaService {
  constructor(
    @InjectRepository(Subcategoria)
    private readonly subcategoriaRepository: Repository<Subcategoria>,
    @InjectRepository(categoria)
    private readonly categoriaRepository: Repository<categoria>,
  ) {}
 async create(createSubcategoriaDto: CreateSubcategoriaDto) {
    let subcategoria = new Subcategoria;
    let categoria = await this.categoriaRepository.findOneBy({codigo: createSubcategoriaDto.categoriacodigo});
    subcategoria.nombre = createSubcategoriaDto.nombre;
    subcategoria.descripcion = createSubcategoriaDto.descripcion;
    subcategoria.categoria = categoria;
  }

  async findAll():Promise< Subcategoria[]>{
      return this.subcategoriaRepository.find();
  }

  findByName(nombre:string):Promise <Subcategoria> {
    return this.subcategoriaRepository.findOne({
      where: {
        nombre:nombre
      }
  })
}

  update(nombre:string, updateSubcategoriaDto: UpdateSubcategoriaDto) {
    let subcategoria = new Subcategoria;
    subcategoria.nombre = updateSubcategoriaDto.nombre;
    subcategoria.descripcion = updateSubcategoriaDto.descripcion;
    this.subcategoriaRepository.update(nombre, subcategoria);
    return `Se ha actualizado la subcategoria #${subcategoria.nombre}`;
  }

  remove(id: number) {
    return `This action removes a #${id} subcategoria`;
  }
}
