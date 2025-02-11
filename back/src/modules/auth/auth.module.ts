import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/dal/models/user.model';
import { AuthBusinessService } from 'src/bll/auth/auth.business.service';
import { AuthRepository } from 'src/dal/repositories/auth.repository';
import { AuthFacade } from 'src/facades/auth/auth-facade';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { JwtAuthStrategy } from 'src/common/strategies/jwt.strategy';
import { AuthSchema } from 'src/dal/models/auth.model';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Auth', schema: AuthSchema },
    ]),
    forwardRef(() => UserModule),
  ],
  providers: [
    AuthBusinessService,
    AuthRepository,
    AuthFacade,
    JwtAuthStrategy,
    JwtAuthGuard,
  ],
  controllers: [AuthController],
  exports: [AuthFacade, AuthBusinessService],
})
export class AuthModule {}
