import { Injectable,BadRequestException } from '@nestjs/common';
import { CreateFotoservicioDto } from './dto/create-fotoservicio.dto';
import { UpdateFotoservicioDto } from './dto/update-fotoservicio.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Fotoservicio } from './entities/fotoservicio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from 'src/service/entities/service.entity';

@Injectable()
export class FotoservicioService {

  constructor(
    @InjectRepository(Fotoservicio)
    private readonly fotoserviciosRepository: Repository<Fotoservicio>,
    private readonly servicioRepository: Repository<Service>,
    private cloudinary: CloudinaryService
    ) {}
 
  async uploadImageToCloudinary(file: Express.Multer.File) {
    return this.cloudinary.uploadFile(file) 
  }

  async create(createFotoservicioDto: CreateFotoservicioDto) {
    const fotoServicio = new Fotoservicio();
    let servicio = await this.servicioRepository.findOneBy({id: createFotoservicioDto.servicioid});
    fotoServicio.url = createFotoservicioDto.url;
    fotoServicio.name = createFotoservicioDto.name;
    fotoServicio.service = servicio;
    return this.fotoserviciosRepository.save(fotoServicio);

  }

}
