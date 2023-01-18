import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  /*@UseGuards(JwtAuthGuard)*/
  @Post('login') 
  async loginCompany(@Body() authDto:AuthDto) {
    return this.authService.login(authDto)
  }
}
