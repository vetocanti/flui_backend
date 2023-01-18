import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Company } from "./company.entity";
import { Repository } from "typeorm";
import { CreateCompanyDto } from "./company.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompanyService {
    constructor(
        @InjectRepository(Company)
        private readonly companiesRepository: Repository<Company>,
    ) {}
    
    findAll(): Promise<Company[]> {
        return this.companiesRepository.find();
    }

    async remove(id:string): Promise <void> {
        await this.companiesRepository.delete(id);
    }

    async create(createCompanyDto: CreateCompanyDto): Promise <Company> {
        const company = new Company();
        let hashPass= await bcrypt.hash(createCompanyDto.clave,10);
        company.nombre= createCompanyDto.nombre;
        company.telefono=createCompanyDto.telefono;
        company.correoElectronico= createCompanyDto.correoElectronico;
        company.clave= hashPass;
        company.nombreUsuario= createCompanyDto.nombreUsuario;
        company.descripcion= createCompanyDto.descripcion;
        //company.Foto= createCompanyDto.Foto;

        return this.companiesRepository.save(company);
    }

    findOneByUsername(nombreUsuario: string): Promise<Company | undefined > {
        return this.companiesRepository.findOneBy({nombreUsuario});
      }
  
}