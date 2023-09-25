import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { empresa } from 'src/Empresa/company.entity';
import { categoria } from 'src/Categoria/category.entity';
import { Fotoservicio } from 'src/fotoservicio/entities/fotoservicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service, empresa, categoria])],
  controllers: [ServiceController],
  providers: [ServiceService],
  exports: [ServiceService, TypeOrmModule]
})
export class ServiceModule {}
