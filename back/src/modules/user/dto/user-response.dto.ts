import { IsDate, IsEmail, IsString } from 'class-validator';

export class UserResponseDto {
  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDate()
  createdAt: Date;
}
