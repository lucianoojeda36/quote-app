import { Schema } from 'mongoose';
export declare const QuoteSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    from: string;
    to: string;
    amount: number;
    rate: number;
    convertedAmount: number;
    timestamp: Date;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    from: string;
    to: string;
    amount: number;
    rate: number;
    convertedAmount: number;
    timestamp: Date;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}>> & import("mongoose").FlatRecord<{
    from: string;
    to: string;
    amount: number;
    rate: number;
    convertedAmount: number;
    timestamp: Date;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
