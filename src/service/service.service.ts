import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { empresa } from 'src/Empresa/company.entity';
import { categoria } from 'src/Categoria/category.entity';

@Injectable()
export class ServiceService {
  
  constructor(@InjectRepository(Service)
  private readonly serviceRepository: Repository<Service>,
  @InjectRepository(empresa)
  private readonly empresaRepository: Repository<empresa>,
  @InjectRepository(categoria)
  private readonly categoriaRepository: Repository<categoria>,
  )
 
  {}
  async create(createServiceDto: CreateServiceDto) {

    let service = new Service;
    
    let empresa = await this.empresaRepository.findOneBy({nombreusuario: createServiceDto.empresaNombreusuario});
    let categoria = await this.categoriaRepository.findOneBy({codigo: createServiceDto.categoriaCodigo});
    service.categoria = categoria;
    service.empresa = empresa;
    service.titulo = createServiceDto.titulo;
    service.detalle = createServiceDto.detalle;
    service.precio = createServiceDto.precio;
    return this.serviceRepository.save(service);
    
  }

  async findAll(): Promise<Service []> {
    return this.serviceRepository.find();
  }

  async findById(id:number): Promise <Service | undefined> {
   //buscar por el ID 
   return this.serviceRepository.findOneBy({id});
  }  

  findByTitle(titulo: string): Promise<Service | undefined> {
    return this.serviceRepository.findOneBy({titulo});
  }

  //método para actuzalizar un servicio


  async update(id: number, updateServiceDto: UpdateServiceDto) {
    let service = await this.serviceRepository.findOneBy({id});
    if(updateServiceDto.titulo!='') {
      service.titulo = updateServiceDto.titulo;
    }
    if(updateServiceDto.detalle!='') {
      service.detalle = updateServiceDto.detalle;
    }

    if(updateServiceDto.precio!=null) {
      service.precio = updateServiceDto.precio;
    }
    return this.serviceRepository.save(service);
  }

  async remove(id: number):Promise<void> {
    await  this.serviceRepository.delete(id);
  }

 
}
