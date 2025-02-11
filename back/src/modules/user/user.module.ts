import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserBusinessService } from 'src/bll/user/user.business.service';
import { UserSchema } from 'src/dal/models/user.model';
import { UserRepository } from 'src/dal/repositories/user.repository';
import { UserFacade } from 'src/facades/user/user-facade';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => AuthModule),
  ],
  providers: [UserBusinessService, UserRepository, UserFacade],
  controllers: [UserController],
  exports: [UserFacade, UserBusinessService],
})
export class UserModule {}
