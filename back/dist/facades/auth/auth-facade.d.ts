import { IAuthFacade } from './interfaces/auth-facade.interface';
import { UserBusinessService } from 'src/bll/user/user.business.service';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';
import { RegisterDto } from 'src/modules/auth/dto/register.dto';
import { RegisterResponseDto } from 'src/modules/auth/dto/register-response.dto';
import { AuthBusinessService } from 'src/bll/auth/auth.business.service';
export declare class AuthFacade implements IAuthFacade {
    private authBusinessService;
    private userBusinessService;
    constructor(authBusinessService: AuthBusinessService, userBusinessService: UserBusinessService);
    login(credentials: LoginDto): Promise<LoginResponseDto>;
    register(userData: RegisterDto): Promise<RegisterResponseDto>;
    validateToken(token: string): Promise<boolean>;
}
