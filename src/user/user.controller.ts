import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async getUsers() {}
  @Get(':idUser')
  async getUser() {}
  @Post()
  async createUser() {}
  @Put(':idUser')
  async editUser() {}
  @Delete()
  async deleteUser() {}
  @Patch(':idUser')
  async editPassUser() {}
}
