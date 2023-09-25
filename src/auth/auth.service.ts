import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CompanyService } from 'src/Empresa/company.service';
import { UserService } from 'src/Usuario/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private companyService: CompanyService,
        private userService: UserService,
        private jwtService: JwtService
        ) {}

    async validateCompany(nombreUsuario: string, clave: string): Promise <any> {
        let company = await this.companyService.findOneByUsername(nombreUsuario);
        let isMatch = await bcrypt.compare(clave, company.clave);
        if(company && isMatch) {
            let {clave, ...result} = company;
            return result;
        }
        return null;
    }

    async validateUser(nombreUsuario: string, clave: string): Promise <any> {
        let user = await this.userService.findOne(nombreUsuario);
        let isMatch = await bcrypt.compare(clave, user.clave);
        if(user && isMatch) {
            let {clave, ...result} = user;
            return result;
        }
        return null;
    }

    async login(authDto:AuthDto) {
        let {nombreUsuario, clave} = authDto;
        let findCompany = await this.companyService.findOneByUsername(nombreUsuario);
        if(!findCompany)  throw new HttpException('COMPANY_NOT_FOUND', 404);

        const checkPass = await bcrypt.compare(clave, findCompany.clave);

        if(!checkPass) throw new HttpException('PASSWORD_INVALID', HttpStatus.FORBIDDEN);

        let payload = {
            name: findCompany
        }
        
        let token = this.jwtService.sign(payload);


        return token;

      }

      async loginuser(authDto:AuthDto) {
        let {nombreUsuario, clave} = authDto;
        let findUser = await this.userService.findOne(nombreUsuario);
        if(!findUser)  throw new HttpException('USER_NOT_FOUND', 404);

        const checkPass = await bcrypt.compare(clave, findUser.clave);

        if(!checkPass) throw new HttpException('PASSWORD_INVALID', HttpStatus.FORBIDDEN);

        let payload = {
            name: findUser
        }
        
        let token = this.jwtService.sign(payload);
        return token;
      }

    
}
