import { UserFacade } from 'src/facades/user/user-facade';
import { UserResponseDto } from './dto/user-response.dto';
import { CustomLoggerService } from 'src/common/logger/logger.service';
export declare class UserController {
    private userFacade;
    private logger;
    constructor(userFacade: UserFacade, logger: CustomLoggerService);
    getUser(id: string): Promise<UserResponseDto>;
}
