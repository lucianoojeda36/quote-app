import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from 'src/dal/repositories/user.repository';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { UserEntity } from 'src/dal/type/user.type';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';

@Injectable()
export class UserBusinessService {
  constructor(private userRepository: UserRepository) {}

  async create(userData: CreateUserDto): Promise<UserEntity> {
    const existUser = await this.userRepository.findByEmail(userData.email);

    if (existUser) {
      throw new ConflictException('the user email is already register');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return this.userRepository.create({
      ...userData,
      password: hashedPassword,
    });
  }

  async findById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new NotFoundException();
    return user;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findByEmail(email);
  }

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.userRepository.login(loginDto);
  }
}
