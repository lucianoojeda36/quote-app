import { Strategy } from 'passport-jwt';
import { UserBusinessService } from 'src/bll/user/user.business.service';
declare const JwtAuthStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
    private userBusinessService;
    constructor(userBusinessService: UserBusinessService);
    validate(payload: any): Promise<import("../../dal/type/user.type").UserEntity>;
}
export {};
