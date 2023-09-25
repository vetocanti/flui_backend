import { Body, Controller,Get,Post,Param, Delete, Put, } from "@nestjs/common";
import { Code } from "typeorm";
import { categoria } from "./category.entity";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./dto/category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService){
    }
    @Post('create')
    create(@Body() CategoryDto:CategoryDto) {
        this.categoryService.add(CategoryDto);
    }

    @Get()
    findAll() {
        return this.categoryService.findAll();
    }

    @Get(':name')
    async findOne(@Param('name') name:string): Promise<categoria> {
        return this.categoryService.findByName(name);
    }

    @Delete(':codigo')
    async removeOne(@Param('codigo') codigo:string): Promise<void> {
        await this.categoryService.remove(codigo);
    }

    @Put('update/description/:code')
    async updateDescription(@Param('code') code: string ,@Body() description:string ): Promise<void> {
        await this.categoryService.setDescription(code,description);
    } 



}