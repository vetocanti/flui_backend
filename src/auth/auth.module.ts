import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { CompaniesModule } from 'src/Empresa/company.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy} from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/Empresa/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Company]),
    CompaniesModule,
    PassportModule,
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
