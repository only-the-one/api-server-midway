import { Context } from 'egg';
import { IGetUserResponse } from '../interface';
import { UserService } from '../service/user';
export declare class APIController {
    ctx: Context;
    userService: UserService;
    getUser(uid: string): Promise<IGetUserResponse>;
}
