import { Test, TestingModule } from '@nestjs/testing';
import { QuoteBusinessService } from 'src/bll/quote/quote.business.service';
import { QuoteFacade } from 'src/facades/quote/quote-facade';
import { CreateQuoteDto } from 'src/modules/quote/dto/create-quote.dto';

describe('QuoteFacade', () => {
  let facade: QuoteFacade;
  let quoteBusinessServiceMock: Partial<QuoteBusinessService>;

  beforeEach(async () => {
    quoteBusinessServiceMock = {
      createQuote: jest.fn().mockResolvedValue({
        from: 'USD',
        to: 'EUR',
        amount: 100,
        rate: 0.85,
        convertedAmount: 85,
        timestamp: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
      }),
      getQuote: jest.fn().mockResolvedValue({
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
      providers: [
        QuoteFacade,
        { provide: QuoteBusinessService, useValue: quoteBusinessServiceMock },
      ],
    }).compile();

    facade = module.get<QuoteFacade>(QuoteFacade);
  });

  it('should be defined', () => {
    expect(facade).toBeDefined();
  });

  it('should create a quote', async () => {
    const dto: CreateQuoteDto = { from: 'USD', to: 'EUR', amount: 100 };
    const result = await facade.createQuote(dto);

    expect(result).toBeDefined();
    expect(result.amount).toBe(100);
  });

  it('should get a quote by ID', async () => {
    const result = await facade.getQuoteById('123');

    expect(result).toBeDefined();
    expect(result.to).toBe('EUR');
  });
});
