import { IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class LoginResponseDto {
  @Type(() => UserDto)
  user: UserDto;

  @IsString()
  token: string;
}
