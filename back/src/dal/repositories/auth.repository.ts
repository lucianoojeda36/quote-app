import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from '../type/user.type';
import { AuthEntity } from '../type/auth.type';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel('User') private userModel: Model<UserEntity>,
    @InjectModel('Auth')
    private authSettingsModel: Model<AuthEntity>,
  ) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userModel.findOne({ email });
  }

  async createAuthSettings(userId: string): Promise<void> {
    await this.authSettingsModel.create({
      userId,
      lastLogin: new Date(),
      isActive: true,
      failedAttempts: 0,
    });
  }

  async updateLastLogin(userId: string): Promise<void> {
    await this.authSettingsModel.updateOne(
      { userId },
      { lastLogin: new Date() },
    );
  }

  async incrementFailedAttempts(userId: string): Promise<void> {
    await this.authSettingsModel.updateOne(
      { userId },
      { $inc: { failedAttempts: 1 } },
    );
  }
}
