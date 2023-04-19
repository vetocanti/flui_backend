import { Injectable,BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { empresa } from "./company.entity";
import { Repository } from "typeorm";
import { CreateCompanyDto } from "./dto/company.dto";
import * as bcrypt from 'bcrypt';
import { UpdateServiceDto } from "src/service/dto/update-service.dto";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(empresa)
        private readonly companiesRepository: Repository<empresa>,
        private cloudinary: CloudinaryService
    ) {}
    
    async findAll(): Promise<empresa[]> {
        return this.companiesRepository.find();
    }

    async remove(id:string): Promise <void> {
        await this.companiesRepository.delete(id);
    }
    async uploadImageToCloudinary(file: Express.Multer.File) {
        return this.cloudinary.uploadFile(file) 
      }

    async create(createCompanyDto: CreateCompanyDto): Promise <empresa> {
        const company = new empresa();
        let hashPass= await bcrypt.hash(createCompanyDto.clave,10);
        company.nombre= createCompanyDto.nombre;
        company.email= createCompanyDto.correoElectronico;
        company.clave= hashPass;
        company.nombreusuario= createCompanyDto.nombreUsuario;
        company.descripcion= createCompanyDto.descripcion;
        company.foto = createCompanyDto.foto;

        return this.companiesRepository.save(company);
    }

    findOneByUsername(nombreUsuario: string): Promise<empresa | undefined > {
        return this.companiesRepository.findOneBy({nombreusuario:nombreUsuario});
      }
    async changePassword(nombreUsuario: string, UpdateCompanyDto:UpdateServiceDto){
        let company = this.companiesRepository.findOneBy({nombreusuario:nombreUsuario});
        (await company).clave= UpdateCompanyDto.clave;
    }
  
}