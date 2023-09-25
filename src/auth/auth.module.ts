import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { CompaniesModule } from 'src/Empresa/company.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy} from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { empresa } from 'src/Empresa/company.entity';
import { User } from 'src/Usuario/user.entity';
import { UsersModule } from 'src/Usuario/user.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([empresa,User]),
    CompaniesModule,
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret:jwtConstants.secret,
      signOptions: {expiresIn: '1d'}
    })

  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  /*exports: [AuthService, PassportModule],*/
})
export class AuthModule {}
