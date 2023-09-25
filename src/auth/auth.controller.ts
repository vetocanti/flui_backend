import { Controller, Post, Body, UseGuards, Req, Res, Get } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import * as cookieParser from 'cookie-parser';
import { Response } from 'express';
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  /*@UseGuards(JwtAuthGuard)*/
  @Post('login') 
  async loginCompany(@Res({passthrough: true}) res: Response, @Body() authDto:AuthDto) {
    let token = await this.authService.login(authDto)
   const secretData = {
    token
   };

   //res.cookie('auth-cookie', secretData, {httpOnly:false,});
   return secretData;
}

  @Post('loginuser')
  async loginUser(@Res({passthrough: true}) res: Response, @Body() authDto:AuthDto) {
    let token = await this.authService.loginuser(authDto)
   const secretData = {
    token
   };

   //res.cookie('auth-cookie', secretData, {httpOnly:false,});
   return secretData;
  }

}
