import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';
import { RegisterResponseDto } from 'src/modules/auth/dto/register-response.dto';
import { RegisterDto } from 'src/modules/auth/dto/register.dto';
export interface IAuthFacade {
    login(credentials: LoginDto): Promise<LoginResponseDto>;
    register(userData: RegisterDto): Promise<RegisterResponseDto>;
    validateToken(token: string): Promise<boolean>;
}
