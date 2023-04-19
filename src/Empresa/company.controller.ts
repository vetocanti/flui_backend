import { Controller,Get, Post, Body, UseGuards, UseInterceptors, UploadedFile } from "@nestjs/common";
import { CreateCompanyDto } from "./dto/company.dto";
import { CompanyService } from "./company.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from 'express'
@Controller('companies')
export class CompanyController {

    constructor(private companyService: CompanyService){}

    @Post('create')
    async create(@Body() createCompanyDto: CreateCompanyDto) {
        this.companyService.create(createCompanyDto);
        return "Empresa creada";
    } 

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return this.companyService.uploadImageToCloudinary(file);
    }


   @Get() 
      findAll(){
      return this.companyService.findAll();
    }
    
    
}