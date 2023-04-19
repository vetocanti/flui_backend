import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: ()=> {
    return v2.config({
      cloud_name: 'daemi4zi9',
      api_key: '714983814751844',
      api_secret: 'ZT_kT62esEoIhF4UynogV1phKOU',
    });
  },
};