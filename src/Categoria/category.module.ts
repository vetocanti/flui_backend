import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "./category.controller";
import { categoria } from "./category.entity";
import { CategoryService } from "./category.service";

@Module({
    imports: [TypeOrmModule.forFeature([categoria])],
    providers: [CategoryService], 
    controllers:[CategoryController], 
    exports: [CategoryService, CategoryController]
})

export class CategoryModule{}