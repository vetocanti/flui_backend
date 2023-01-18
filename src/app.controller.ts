import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
   constructor(private authService: AuthService) {}


  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile (@Request() req) {
    return req.company;
  }

}
