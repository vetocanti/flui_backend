import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { timeLog } from 'console';

@Controller('service')
export class ServiceController {
  
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    if(this.serviceService.create(createServiceDto)) {
      return "Servicio creado";
    
    }
    else {
      return "No se pudo crear el servicio";
    }
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':titulo')
  findOne(@Param('title') title: string) {
    return this.serviceService.findByTitle(title);
  }
  

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.serviceService.remove(id);
  }
  
}