import { Module } from '@nestjs/common';
import { SubcategoriaService } from './subcategoria.service';
import { SubcategoriaController } from './subcategoria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subcategoria } from './entities/subcategoria.entity';
import { categoria } from 'src/Categoria/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Subcategoria,categoria])],
  controllers: [SubcategoriaController],
  providers: [SubcategoriaService],
  exports: [SubcategoriaService,TypeOrmModule]
})
export class SubcategoriaModule {}
