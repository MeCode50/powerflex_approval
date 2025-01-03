import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from 'src/dto/dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserDTO) {
    return this.userService.createUser(userDto);
  }
}
