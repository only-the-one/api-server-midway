import { Context } from 'egg';
import { BlogService } from '../service/blog.service';
export declare class Blog {
    ctx: Context;
    blogService: BlogService;
    GetHandler(query: unknown): Promise<any>;
    GetOneHandler(params: any): Promise<any>;
    CreateHandler(body: any): Promise<any>;
    AllHandler(query: any): Promise<any>;
    UpdateOneHandler(params: any, body: any): Promise<any>;
    DeleteOneHandler(params: any): Promise<any>;
}
