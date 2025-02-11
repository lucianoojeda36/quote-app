import { Model } from 'mongoose';
import { UserEntity } from '../type/user.type';
import { AuthEntity } from '../type/auth.type';
export declare class AuthRepository {
    private userModel;
    private authSettingsModel;
    constructor(userModel: Model<UserEntity>, authSettingsModel: Model<AuthEntity>);
    findByEmail(email: string): Promise<UserEntity | null>;
    createAuthSettings(userId: string): Promise<void>;
    updateLastLogin(userId: string): Promise<void>;
    incrementFailedAttempts(userId: string): Promise<void>;
}
