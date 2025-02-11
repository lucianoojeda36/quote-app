import { Model } from 'mongoose';
import { QuoteEntity } from '../type/quote.type';
export declare class QuoteRepository {
    private quoteModel;
    constructor(quoteModel: Model<QuoteEntity>);
    create(quote: Omit<QuoteEntity, 'createdAt' | 'updatedAt'>): Promise<QuoteEntity>;
    findById(id: string): Promise<QuoteEntity | null>;
    findValidQuote(id: string): Promise<QuoteEntity | null>;
}
