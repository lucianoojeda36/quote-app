import { Test, TestingModule } from '@nestjs/testing';
import { QuoteFacade } from 'src/facades/quote/quote-facade';
import { CreateQuoteDto } from 'src/modules/quote/dto/create-quote.dto';
import { QuoteController } from 'src/modules/quote/quote.controller';

describe('QuoteController', () => {
  let controller: QuoteController;
  let quoteFacadeMock: Partial<QuoteFacade>;

  beforeEach(async () => {
    quoteFacadeMock = {
      createQuote: jest.fn().mockResolvedValue({
        from: 'USD',
        to: 'EUR',
        amount: 100,
        rate: 0.85,
        convertedAmount: 85,
        timestamp: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      }),
      getQuoteById: jest.fn().mockResolvedValue({
        from: 'USD',
        to: 'EUR',
        amount: 100,
        rate: 0.85,
        convertedAmount: 85,
        timestamp: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [{ provide: QuoteFacade, useValue: quoteFacadeMock }],
    }).compile();

    controller = module.get<QuoteController>(QuoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a quote', async () => {
    const dto: CreateQuoteDto = { from: 'USD', to: 'EUR', amount: 100 };
    const result = await controller.createQuote(dto);

    expect(result).toBeDefined();
    expect(result.from).toBe('USD');
    expect(result.to).toBe('EUR');
    expect(result.amount).toBe(100);
  });

  it('should get a quote by ID', async () => {
    const result = await controller.getQuote('123');

    expect(result).toBeDefined();
    expect(result.from).toBe('USD');
    expect(result.to).toBe('EUR');
  });
});
