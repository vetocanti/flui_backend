import { Injectable } from '@nestjs/common';
import {v2 as cloudinary,UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: 'daemi4zi9',
      api_key: '714983814751844',
      api_secret: 'ZT_kT62esEoIhF4UynogV1phKOU',
      secure:true,
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      });
      Readable.from(file.buffer).pipe(upload); 
      // covert buffer to readable stream and pass to upload
    });
  }
  }

