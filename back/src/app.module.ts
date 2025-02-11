import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteSchema } from './dal/models/quote.model';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { QuoteModule } from './modules/quote/quote.module';
import { UserSchema } from './dal/models/user.model';
import { CustomLoggerService } from './common/logger/logger.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Quote', schema: QuoteSchema },
    ]),
    AuthModule,
    UserModule,
    QuoteModule,
  ],
  controllers: [],

  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class AppModule {}
