import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "./category.controller";
import { categoria } from "./category.entity";
import { CategoryService } from "./category.service";
import { Service } from "src/service/entities/service.entity";

@Module({
    imports: [TypeOrmModule.forFeature([categoria])],
    providers: [CategoryService], 
    controllers:[CategoryController], 
    exports: [CategoryService]
})

export class CategoryModule{}