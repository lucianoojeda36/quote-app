import { Body, Controller, Post } from '@nestjs/common';
import { AuthFacade } from 'src/facades/auth/auth-facade';
import { CustomLoggerService } from 'src/common/logger/logger.service';
import { LoginDto } from '../auth/dto/ login.dto';
import { LoginResponseDto } from '../auth/dto/login-response.dto';
import { RegisterDto } from '../auth/dto/register.dto';
import { RegisterResponseDto } from '../auth/dto/register-response.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authFacade: AuthFacade,
    private logger: CustomLoggerService,
  ) {}

  @Post('login')
  async login(@Body() credentials: LoginDto): Promise<LoginResponseDto> {
    this.logger.log(
      `User attempting to login with email: ${credentials.email}`,
    );
    try {
      const result = await this.authFacade.login(credentials);
      this.logger.log(
        `Login successful for user with email: ${credentials.email}`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error during login attempt', error.stack);
      throw error;
    }
  }

  @Post('register')
  async register(@Body() userData: RegisterDto): Promise<RegisterResponseDto> {
    this.logger.log(
      `User attempting to register with email: ${userData.email}`,
    );
    try {
      const result = await this.authFacade.register(userData);
      this.logger.log(
        `Registration successful for user with email: ${userData.email}`,
      );
      return result;
    } catch (error) {
      this.logger.error('Error during registration attempt', error.stack);
      throw error;
    }
  }
}
