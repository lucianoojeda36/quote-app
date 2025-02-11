import { IsDate, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDate()
  createdAt: Date;
}
