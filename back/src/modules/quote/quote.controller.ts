import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { QuoteFacade } from 'src/facades/quote/quote-facade';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuoteResponse } from './dto/quote-response.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { CustomLoggerService } from 'src/common/logger/logger.service';

@UseGuards(JwtAuthGuard)
@Controller('quotes')
export class QuoteController {
  constructor(
    private quoteFacade: QuoteFacade,
    private logger: CustomLoggerService,
  ) {}

  @Post()
  async createQuote(@Body() quoteData: CreateQuoteDto): Promise<QuoteResponse> {
    this.logger.log(
      `Creating quote for ${quoteData.amount} ${quoteData.from} to ${quoteData.to}`,
    );
    try {
      const result = await this.quoteFacade.createQuote(quoteData);
      this.logger.log(`Quote created successfully : ${result}`);
      return result;
    } catch (error) {
      this.logger.error('Error creating quote', error.stack);
      throw error;
    }
  }

  @Get(':id')
  async getQuote(@Param('id') id: string): Promise<QuoteResponse> {
    this.logger.log(`Fetching quote with ID: ${id}`);
    try {
      const result = await this.quoteFacade.getQuoteById(id);
      if (!result) {
        this.logger.warn(`Quote with ID: ${id} not found`);
      } else {
        this.logger.log(`Quote with ID: ${id} retrieved successfully`);
      }
      return result;
    } catch (error) {
      this.logger.error('Error fetching quote', error.stack);
      throw error;
    }
  }
}
