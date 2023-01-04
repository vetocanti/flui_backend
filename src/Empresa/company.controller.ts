import { Controller,Get, Post, Body } from "@nestjs/common";
import { CreateCompanyDto } from "./company.dto";
import { CompanyService } from "./company.service";
import { Company } from "src/interfaces/company.interface";
@Controller('companies')
export class CompanyController {

    constructor(private companyService: CompanyService){}

    @Post('create')
    async create(@Body() createCompanyDto: CreateCompanyDto) {
        this.companyService.create(createCompanyDto);
    } 

   /* @Get() 
    async findAll(): Promise<Company[]> {
        return this.companyService.findAll();
    }*/
    
}