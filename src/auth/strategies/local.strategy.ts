import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(nombreUsuario: string, clave: string): Promise<any> {
    const company = await this.authService.validateCompany(nombreUsuario,clave)
    if (!company) {
      throw new UnauthorizedException();
    }
    return company;
  }
}