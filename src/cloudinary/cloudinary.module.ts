import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryProvider } from './cloudinary.provider';

@Module({
  exports: [CloudinaryService,CloudinaryProvider],
  providers: [CloudinaryService,CloudinaryProvider]
})
export class CloudinaryModule {}
