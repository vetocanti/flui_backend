import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Company } from './Empresa/company.entity';
import { CompaniesModule } from './Empresa/company.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: "adminV",
      password: "P4z_p4r4_4y5_!!",
      database: 'db_flui_test',
      entities: [Company],
      synchronize: false,
    }),
    CompaniesModule,
    AuthModule
  ],
})
export class AppModule {}
