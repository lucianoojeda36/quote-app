import { Model } from 'mongoose';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserEntity } from '../type/user.type';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { AuthBusinessService } from 'src/bll/auth/auth.business.service';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';
export declare class UserRepository {
    private userModel;
    private authBusinessService;
    constructor(userModel: Model<UserEntity>, authBusinessService: AuthBusinessService);
    create(userData: CreateUserDto): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity | null>;
    findByEmail(email: string): Promise<UserEntity | null>;
    login(loginData: LoginDto): Promise<LoginResponseDto>;
}
