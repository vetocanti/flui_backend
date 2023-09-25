import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.dto';
import * as bcrypt from 'bcrypt';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private cloudinary: CloudinaryService
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(nombreusuario:string): Promise<User> {
    return this.usersRepository.findOneBy({ nombreusuario });
  }


  async remove(nombreUsuario:string): Promise<void> {
    await this.usersRepository.delete(nombreUsuario);
  }

  async create(UserDto: UserDto): Promise<User> {
    const user = new User();
    let hashPass= await bcrypt.hash(UserDto.clave,10);
    user.nombre = UserDto.nombre;
    user.nombreusuario = UserDto.nombreusuario;
    user.email = UserDto.email;
    user.clave = hashPass;
    user.fechadenacimiento = UserDto.fechadenacimiento;
    user.preferencias = UserDto.preferencias;
    user.foto = UserDto.foto;
    user.rol = UserDto.rol;

    return this.usersRepository.save(user);

  }
  async uploadImageToCloudinary(file: Express.Multer.File) {
    return this.cloudinary.uploadFile(file) 
  }
}