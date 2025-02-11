import { IUserFacade } from './interfaces/user-facade.interface';
import { UserBusinessService } from 'src/bll/user/user.business.service';
import { AuthBusinessService } from 'src/bll/auth/auth.business.service';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserResponseDto } from 'src/modules/user/dto/user-response.dto';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';
export declare class UserFacade implements IUserFacade {
    private userBusinessService;
    private authBusinessService;
    constructor(userBusinessService: UserBusinessService, authBusinessService: AuthBusinessService);
    create(userData: CreateUserDto): Promise<UserResponseDto>;
    findById(id: string): Promise<UserResponseDto>;
    login(loginDto: LoginDto): Promise<LoginResponseDto>;
}
