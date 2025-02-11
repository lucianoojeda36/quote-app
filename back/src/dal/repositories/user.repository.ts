import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { UserEntity } from '../type/user.type';
import { LoginDto } from 'src/modules/auth/dto/ login.dto';
import { AuthBusinessService } from 'src/bll/auth/auth.business.service';

import * as bcrypt from 'bcryptjs';
import { LoginResponseDto } from 'src/modules/auth/dto/login-response.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private userModel: Model<UserEntity>,
    private authBusinessService: AuthBusinessService,
  ) {}

  async create(userData: CreateUserDto): Promise<UserEntity> {
    return this.userModel.create(userData);
  }

  async findById(id: string): Promise<UserEntity | null> {
    return this.userModel.findById(id);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userModel.findOne({ email });
  }

  async login(@Body() loginData: LoginDto): Promise<LoginResponseDto> {
    const user = await this.userModel
      .findOne({ email: loginData.email })
      .exec();

    if (!user) {
      throw new NotFoundException('Usuario not found');
    }

    const isPasswordValid = await bcrypt.compare(
      loginData.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new NotFoundException('Incorrect Credencials');
    }

    const accessToken = await this.authBusinessService.generateToken(user);

    return { user, token: accessToken };
  }
}
