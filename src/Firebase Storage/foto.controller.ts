import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { firebaseStorage } from './firebase.service';

@Controller('photo')
export class PhotoController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPhoto(@UploadedFile() file) {
    const fileUpload = firebaseStorage.file(file.originalname);
    
    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype
      }
    });
    return new Promise((resolve, reject) => {
      stream.on('error', reject);
      stream.on('finish', () => {
        fileUpload.makePublic()
          .then(() => {
            const url = `https://storage.googleapis.com/${firebaseStorage.name}/${fileUpload.name}`;
            resolve({ url });
          })
          .catch(reject);
      });
      stream.end(file.buffer);
    });
  }
}
