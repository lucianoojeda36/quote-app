import { Schema } from 'mongoose';
export declare const AuthSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    lastLogin: Date;
    isActive: boolean;
    failedAttempts: number;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    lastLogin: Date;
    isActive: boolean;
    failedAttempts: number;
}>> & import("mongoose").FlatRecord<{
    lastLogin: Date;
    isActive: boolean;
    failedAttempts: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
