import { Module } from '@nestjs/common';
import { FotoservicioService } from './fotoservicio.service';
import { FotoservicioController } from './fotoservicio.controller';
import {MulterModule} from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fotoservicio } from './entities/fotoservicio.entity';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { Service } from 'src/service/entities/service.entity';

@Module({
  controllers: [FotoservicioController],
  providers: [FotoservicioService,CloudinaryService],
  imports: [TypeOrmModule.forFeature([Fotoservicio,Service]), MulterModule.register({storage:memoryStorage()})],
  exports: [FotoservicioService,TypeOrmModule]
})
export class FotoservicioModule {}
