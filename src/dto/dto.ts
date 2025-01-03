import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class UserDTO {
  @ApiProperty({
    description: 'Email of the user',
    example: 'user@example.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'First name of the user',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Phone number of the user',
    example: '+1234567890',
  })
  @IsPhoneNumber()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({
    description: 'Business role of the user',
    example: 'Owner',
  })
  @IsString()
  @IsNotEmpty()
  businessRole: string;

  @ApiProperty({
    description: 'Name of the business',
    example: 'Tech Innovations Ltd.',
  })
  @IsString()
  @IsNotEmpty()
  businessName: string;

  @ApiProperty({
    description: 'House number of the business',
    example: '12B',
  })
  @IsString()
  @IsNotEmpty()
  businessHouseNumber: string;

  @ApiProperty({
    description: 'Street address of the business',
    example: 'King Street',
  })
  @IsString()
  @IsNotEmpty()
  streetAddress: string;

  @ApiProperty({
    description: 'Town where the business is located',
    example: 'Lagos',
  })
  @IsString()
  @IsNotEmpty()
  town: string;

  @ApiProperty({
    description: 'City where the business is located',
    example: 'Lagos',
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    description: 'State where the business is located',
    example: 'Lagos',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    description: 'Local Government Area of the business',
    example: 'Ikeja',
  })
  @IsString()
  @IsNotEmpty()
  lga: string;

  @ApiProperty({
    description: 'Landmark near the business',
    example: 'Beside the mall',
  })
  @IsString()
  @IsNotEmpty()
  landmark: string;

  @ApiProperty({
    description: 'Nearest bus stop to the business',
    example: 'Palms Bus Stop',
  })
  @IsString()
  @IsNotEmpty()
  nearestBusStop: string;

  @ApiProperty({
    description: 'BVN of the user',
    example: '12345678901',
  })
  @IsString()
  @IsNotEmpty()
  bvn: string;

  @ApiProperty({
    description: 'Referral source of the user',
    example: 'Social media',
  })
  @IsString()
  @IsOptional()
  referralSource?: string;
}
