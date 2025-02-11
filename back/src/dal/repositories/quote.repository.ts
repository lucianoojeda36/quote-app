import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { QuoteEntity } from '../type/quote.type';

@Injectable()
export class QuoteRepository {
  constructor(@InjectModel('Quote') private quoteModel: Model<QuoteEntity>) {}

  async create(
    quote: Omit<QuoteEntity, 'createdAt' | 'updatedAt'>,
  ): Promise<QuoteEntity> {
    const createdQuote = new this.quoteModel({
      ...quote,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return createdQuote.save();
  }

  async findById(id: string): Promise<QuoteEntity | null> {
    return this.quoteModel.findOne({ id }).exec();
  }

  async findValidQuote(id: string): Promise<QuoteEntity | null> {
    return this.quoteModel
      .findOne({
        _id: new Types.ObjectId(id),
        expiresAt: { $gt: new Date() },
      })
      .exec();
  }
}
