import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class RegisterResponseDto {
  @Type(() => UserDto)
  user: UserDto;

  @IsString()
  token: string;
}
