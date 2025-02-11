import { Injectable } from '@nestjs/common';
import { IUserFacade } from './interfaces/user-facade.interface';
import { UserBusinessService } from 'src/bll/user/user.business.service';
import { AuthBusinessService } from 'src/bll/auth/auth.business.service';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserResponseDto } from 'src/modules/user/dto/user-response.dto';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';

@Injectable()
export class UserFacade implements IUserFacade {
  constructor(
    private userBusinessService: UserBusinessService,
    private authBusinessService: AuthBusinessService,
  ) {}

  async create(userData: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.userBusinessService.create(userData);
    await this.authBusinessService.setupInitialAuth(user);
    return user;
  }

  async findById(id: string): Promise<UserResponseDto> {
    return this.userBusinessService.findById(id);
  }

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.userBusinessService.login(loginDto);
  }

  // async update(id: string, userData: UpdateUserDto): Promise<UserResponseDto> {
  //   return this.userBusinessService.update(id, userData);
  // }

  // async delete(id: string): Promise<void> {
  //   await this.userBusinessService.delete(id);
  // }
}
