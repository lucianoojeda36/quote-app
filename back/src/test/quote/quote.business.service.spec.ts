import { Test, TestingModule } from '@nestjs/testing';
import { QuoteRepository } from 'src/dal/repositories/quote.repository';
import { ExchangeRateProvider } from 'src/providers/exchange-rate/exchange-rate.provider';
import { CreateQuoteDto } from 'src/modules/quote/dto/create-quote.dto';
import { NotFoundException } from '@nestjs/common';
import { QuoteBusinessService } from 'src/bll/quote/quote.business.service';

describe('QuoteBusinessService', () => {
  let service: QuoteBusinessService;
  let quoteRepositoryMock: Partial<QuoteRepository>;
  let exchangeRateProviderMock: Partial<ExchangeRateProvider>;

  beforeEach(async () => {
    quoteRepositoryMock = {
      create: jest.fn().mockImplementation((quote) => ({
        ...quote,
        id: '123',
      })),
      findValidQuote: jest.fn().mockResolvedValue({
        from: 'USD',
        to: 'EUR',
        amount: 100,
        rate: 0.85,
        convertedAmount: 85,
        timestamp: new Date(),
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      }),
    };

    exchangeRateProviderMock = {
      getRate: jest.fn().mockResolvedValue(0.85),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QuoteBusinessService,
        { provide: QuoteRepository, useValue: quoteRepositoryMock },
        { provide: ExchangeRateProvider, useValue: exchangeRateProviderMock },
      ],
    }).compile();

    service = module.get<QuoteBusinessService>(QuoteBusinessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a quote', async () => {
    const dto: CreateQuoteDto = { from: 'USD', to: 'EUR', amount: 100 };
    const result = await service.createQuote(dto);

    expect(result).toBeDefined();
    expect(result.from).toBe('USD');
    expect(result.to).toBe('EUR');
    expect(result.amount).toBe(100);
  });

  it('should throw an error if the exchange rate is invalid', async () => {
    jest.spyOn(exchangeRateProviderMock, 'getRate').mockResolvedValue(null);

    const dto: CreateQuoteDto = { from: 'USD', to: 'EUR', amount: 100 };

    await expect(service.createQuote(dto)).rejects.toThrow(
      'Exchange rate is invalid',
    );
  });

  it('should get a valid quote', async () => {
    const result = await service.getQuote('123');

    expect(result).toBeDefined();
    expect(result.to).toBe('EUR');
  });

  it('should throw an error if the quote does not exist', async () => {
    jest.spyOn(quoteRepositoryMock, 'findValidQuote').mockResolvedValue(null);

    await expect(service.getQuote('999')).rejects.toThrow(NotFoundException);
  });
});
