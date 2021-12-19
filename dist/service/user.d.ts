import { IUserOptions } from '../interface';
export declare class UserService {
    getUser(options: IUserOptions): Promise<{
        uid: string;
        username: string;
        phone: string;
        email: string;
    }>;
}
