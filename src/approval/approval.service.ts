import { Injectable, HttpStatus } from '@nestjs/common';
import { UserDTO } from 'src/dto/dto';
import { handleResponse } from 'src/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(userDto: UserDTO) {
    const user = await this.prisma.user.create({
      data: {
        ...userDto, // Include referralSource as part of userDto
      },
    });

    if (!user) {
      return new handleResponse(
        HttpStatus.BAD_REQUEST,
        'Failed to create user',
      ).getResponse();
    }

    return new handleResponse(
      HttpStatus.CREATED,
      'User created successfully',
      user,
    ).getResponse();
  }
}
