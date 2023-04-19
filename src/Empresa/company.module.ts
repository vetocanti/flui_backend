import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { CompanyController } from "./company.controller";
import { empresa } from "./company.entity";
import { CompanyService } from "./company.service";

@Module({
    imports: [TypeOrmModule.forFeature([empresa])],
    controllers:[CompanyController],
    providers:[CompanyService, CloudinaryService],
    exports: [CompanyService, TypeOrmModule]
})
export class CompaniesModule{
}