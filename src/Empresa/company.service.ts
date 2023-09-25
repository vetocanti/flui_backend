import { Injectable,BadRequestException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { empresa } from "./company.entity";
import { Service } from "src/service/entities/service.entity";
import { Repository } from "typeorm";
import { CreateCompanyDto } from "./dto/company.dto";
import * as bcrypt from 'bcrypt';
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
const mysql = require('mysql2');
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
    findOneByEmail(correoElectronico: string): Promise<empresa | undefined > {
        return this.companiesRepository.findOneBy({email:correoElectronico});
      }
    async changePassword(nombreUsuario: string, UpdateCompanyDto:UpdateCompanyDto){
        let company = this.companiesRepository.findOneBy({nombreusuario:nombreUsuario});
        (await company).clave= UpdateCompanyDto.clave;
    }

    async showServices(nombreUsuario: string): Promise<empresa | undefined > {
        let company = await this.companiesRepository.createQueryBuilder("empresa")
        .leftJoinAndSelect("empresa.services", "service")
        .where("empresa.nombreusuario = :nombreusuario", { nombreusuario: nombreUsuario });

        
        return company.getOne();

      }
    async getEmpresaAndServicio(nombreUsuario: string): Promise<Object | undefined > {
        let company = await this.companiesRepository.createQueryBuilder("empresa")
        .leftJoinAndSelect("empresa.services", "service")
        .where("empresa.nombreusuario = :nombreusuario", { nombreusuario: nombreUsuario });
         return (await company.getOne()).services;
    }
    async getEmpresaAndServicioById(id: number): Promise<Object | undefined > { 
        let company = await this.companiesRepository.createQueryBuilder("empresa")
        .leftJoinAndSelect("empresa.services", "service")
        .where("service.id = :id", { id: id });
         return (await company.getOne()).nombreusuario;
    }


    
  
}