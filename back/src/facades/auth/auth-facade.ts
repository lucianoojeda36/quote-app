import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { IAuthFacade } from './interfaces/auth-facade.interface';
import { UserBusinessService } from 'src/bll/user/user.business.service';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';
import { RegisterDto } from 'src/modules/auth/dto/register.dto';
import { RegisterResponseDto } from 'src/modules/auth/dto/register-response.dto';
import { AuthBusinessService } from 'src/bll/auth/auth.business.service';

@Injectable()
export class AuthFacade implements IAuthFacade {
  constructor(
    private authBusinessService: AuthBusinessService,
    private userBusinessService: UserBusinessService,
  ) {}

  async login(credentials: LoginDto): Promise<LoginResponseDto> {
    const isValid =
      await this.authBusinessService.validateCredentials(credentials);
    if (!isValid) throw new UnauthorizedException();

    const user = await this.userBusinessService.findByEmail(credentials.email);
    const token = await this.authBusinessService.generateToken(user);

    return { user, token };
  }

  async register(userData: RegisterDto): Promise<RegisterResponseDto> {
    const exists = await this.userBusinessService.findByEmail(userData.email);

    const user = await this.userBusinessService.create(userData);
    const token = await this.authBusinessService.generateToken(user);

    return { user, token };
  }

  async validateToken(token: string): Promise<boolean> {
    return this.authBusinessService.verifyToken(token);
  }
}
