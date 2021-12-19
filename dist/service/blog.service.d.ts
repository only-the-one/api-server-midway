import BlogEntity from '../entity/blog.entity';
import { Repository } from 'typeorm';
export declare class BlogService {
    blogModel: Repository<BlogEntity>;
    GetAll(query: any): Promise<any>;
    Fetch(query: any): Promise<any>;
    FindOne(query: any): Promise<any>;
    Create(data: any): Promise<any>;
    UpdateOne(option: any, query: any): Promise<void>;
    Delete(query: any): Promise<void>;
}
