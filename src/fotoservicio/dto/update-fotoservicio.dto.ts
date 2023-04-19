import { PartialType } from '@nestjs/mapped-types';
import { CreateFotoservicioDto } from './create-fotoservicio.dto';

export class UpdateFotoservicioDto extends PartialType(CreateFotoservicioDto) {}
