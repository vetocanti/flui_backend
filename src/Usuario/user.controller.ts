// crear controlador 

import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':nombreUsuario')
    async findOne(@Param('nombreUsuario') nombreUsuario: string): Promise<User> {
        return await this.userService.findOne(nombreUsuario);
    }

    @Post('create')
    async create(@Body() userDto: UserDto): Promise<User> {
        return await this.userService.create(userDto);
    }



    @Delete(':nombreUsuario')
    async delete(@Param('nombreUsuario') nombreUsuario: string): Promise<void> {
        return await this.userService.remove(nombreUsuario);
    }

}