import { AuthFacade } from 'src/facades/auth/auth-facade';
import { CustomLoggerService } from 'src/common/logger/logger.service';
import { LoginDto } from '../auth/dto/ login.dto';
import { LoginResponseDto } from '../auth/dto/login-response.dto';
import { RegisterDto } from '../auth/dto/register.dto';
import { RegisterResponseDto } from '../auth/dto/register-response.dto';
export declare class AuthController {
    private authFacade;
    private logger;
    constructor(authFacade: AuthFacade, logger: CustomLoggerService);
    login(credentials: LoginDto): Promise<LoginResponseDto>;
    register(userData: RegisterDto): Promise<RegisterResponseDto>;
}
