import { Controller, Post, Body } from '@nestjs/common';
import { UserDTO } from 'src/dto/dto';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserDTO) {
    return this.userService.createUser(userDto);
  }
}
