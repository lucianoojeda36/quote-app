import { UserRepository } from 'src/dal/repositories/user.repository';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserEntity } from 'src/dal/type/user.type';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';
export declare class UserBusinessService {
    private userRepository;
    constructor(userRepository: UserRepository);
    create(userData: CreateUserDto): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity | null>;
    login(loginDto: LoginDto): Promise<LoginResponseDto>;
}
