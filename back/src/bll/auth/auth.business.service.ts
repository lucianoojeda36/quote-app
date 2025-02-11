import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import * as bcrypt from 'bcryptjs';
import { AuthRepository } from 'src/dal/repositories/auth.repository';
import { UserDto } from 'src/modules/user/dto/user.dto';

@Injectable()
export class AuthBusinessService {
  constructor(
    private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async validateCredentials(credentials: LoginDto): Promise<boolean> {
    const user = await this.authRepository.findByEmail(credentials.email);

    if (!user) return false;

    return bcrypt.compare(credentials.password, user.password);
  }

  async generateToken(user: UserDto): Promise<string> {
    const payload = { sub: user.userId, email: user.email };
    return this.jwtService.sign(payload);
  }

  async setupInitialAuth(user: UserDto): Promise<void> {
    await this.authRepository.createAuthSettings(user.userId);
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      const decoded = this.jwtService.verify(token);
      return !!decoded;
    } catch (error) {
      return false;
    }
  }
}
