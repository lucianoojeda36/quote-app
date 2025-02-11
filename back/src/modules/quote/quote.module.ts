import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuoteBusinessService } from 'src/bll/quote/quote.business.service';
import { QuoteSchema } from 'src/dal/models/quote.model';
import { QuoteRepository } from 'src/dal/repositories/quote.repository';
import { QuoteFacade } from 'src/facades/quote/quote-facade';
import { QuoteController } from './quote.controller';
import { UserModule } from '../user/user.module';
import { ExchangeRateProvider } from 'src/providers/exchange-rate/exchange-rate.provider';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Quote', schema: QuoteSchema }]),
    forwardRef(() => UserModule),
    HttpModule,
    forwardRef(() => AuthModule),
  ],
  providers: [
    QuoteBusinessService,
    QuoteRepository,
    QuoteFacade,
    ExchangeRateProvider,
  ],
  controllers: [QuoteController],
  exports: [QuoteFacade],
})
export class QuoteModule {}
