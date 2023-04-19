import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FotoservicioService } from './fotoservicio.service';
import { CreateFotoservicioDto } from './dto/create-fotoservicio.dto';
import { UpdateFotoservicioDto } from './dto/update-fotoservicio.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('fotoservicio')
export class FotoservicioController {
  constructor(private readonly fotoservicioService: FotoservicioService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file:Express.Multer.File,@Body() createFotoservicioDto: CreateFotoservicioDto) {
    /*const url= (await this.fotoservicioService.uploadImageToCloudinary(file)).url
    createFotoservicioDto.url=url;
    createFotoservicioDto.name=file.originalname;
    this.fotoservicioService.create(createFotoservicioDto);*/
    return this.fotoservicioService.uploadImageToCloudinary(file);
    
  }
}
