import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {  empresa } from './Empresa/company.entity';
import { CompaniesModule } from './Empresa/company.module';
import { AuthModule } from './auth/auth.module';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';
import { FotoservicioModule } from './fotoservicio/fotoservicio.module';
import { ServiceModule } from './service/service.module';
import { ContactModule } from './contact/contact.module';
import { Contact } from './contact/entities/contact.entity';
import { Service } from './service/entities/service.entity';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import {  categoria } from './Categoria/category.entity';
import { Subcategoria } from './subcategoria/entities/subcategoria.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: "adminV",
      password: "P4z_p4r4_4y5_!!",
      database: 'db_flui_test',
      entities: [empresa,Contact,Service,categoria,Subcategoria],
      synchronize: false,
    }),
    CompaniesModule,
    AuthModule,
    SubcategoriaModule,
    FotoservicioModule,
    ServiceModule,
    ContactModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
