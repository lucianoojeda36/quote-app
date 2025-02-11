import { Injectable, NotFoundException } from '@nestjs/common';
import { QuoteRepository } from 'src/dal/repositories/quote.repository';
import { CreateQuoteDto } from 'src/modules/quote/dto/create-quote.dto';
import { QuoteResponse } from 'src/modules/quote/dto/quote-response.dto';
import { ExchangeRateProvider } from '../../providers/exchange-rate/exchange-rate.provider';
import { QuoteEntity } from 'src/dal/type/quote.type';

@Injectable()
export class QuoteBusinessService {
  constructor(
    private quoteRepository: QuoteRepository,
    private exchangeRateProvider: ExchangeRateProvider,
  ) {}

  async createQuote(data: CreateQuoteDto): Promise<QuoteResponse> {
    const rate = await this.exchangeRateProvider.getRate(data.from, data.to);

    if (!rate || isNaN(rate)) {
      throw new Error('Exchange rate is invalid');
    }

    const convertedAmount = data.amount * rate;

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 5 * 60 * 1000);

    const quote = await this.quoteRepository.create({
      from: data.from,
      to: data.to,
      amount: data.amount,
      rate,
      convertedAmount,
      timestamp: now,
      expiresAt,
    });

    return this.mapToResponse(quote);
  }

  async getQuote(id: string): Promise<QuoteResponse> {
    const quote = await this.quoteRepository.findValidQuote(id);

    if (!quote) {
      throw new NotFoundException('Quote not found or has expired');
    }

    return this.mapToResponse(quote);
  }

  private mapToResponse(quote: QuoteEntity): QuoteResponse {
    return {
      from: quote.from,
      to: quote.to,
      amount: quote.amount,
      rate: quote.rate,
      convertedAmount: quote.convertedAmount,
      timestamp: quote.timestamp.toISOString(),
      expiresAt: quote.expiresAt.toISOString(),
    };
  }
}
