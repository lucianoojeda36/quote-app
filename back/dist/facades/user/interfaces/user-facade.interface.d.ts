import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserResponseDto } from 'src/modules/user/dto/user-response.dto';
export interface IUserFacade {
    create(userData: CreateUserDto): Promise<UserResponseDto>;
    findById(id: string): Promise<UserResponseDto>;
}
