import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { AuthRepository } from 'src/dal/repositories/auth.repository';
import { UserDto } from 'src/modules/user/dto/user.dto';
export declare class AuthBusinessService {
    private authRepository;
    private jwtService;
    constructor(authRepository: AuthRepository, jwtService: JwtService);
    validateCredentials(credentials: LoginDto): Promise<boolean>;
    generateToken(user: UserDto): Promise<string>;
    setupInitialAuth(user: UserDto): Promise<void>;
    verifyToken(token: string): Promise<boolean>;
}
