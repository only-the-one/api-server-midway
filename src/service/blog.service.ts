import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import BlogEntity from '../entity/blog.entity';
import { Repository } from 'typeorm';

@Provide()
export class BlogService {
  @InjectEntityModel(BlogEntity)
  blogModel: Repository<BlogEntity>;

  async GetAll(query: any): Promise<any> {
    return await this.blogModel.find(query);
  }

  async Fetch(query: any): Promise<any> {
    return await this.blogModel.find(query);
  }

  async FindOne(query: any): Promise<any> {
    return await this.blogModel.findOne(query);
  }

  async Create(data: any): Promise<any> {
    const blog = new BlogEntity();
    Object.assign(blog, data);
    const result = await this.blogModel.save(blog);
    console.log('result :>> ', result);
    return result;
  }

  async UpdateOne(option: any, query: any) {
    const blogToUpdate = await this.blogModel.findOne(query);
    Object.assign(blogToUpdate, option);
    await this.blogModel.save(blogToUpdate);
  }

  async Delete(query: any) {
    const blogToUpdate = await this.blogModel.findOne(query);
    await this.blogModel.remove(blogToUpdate);
  }
}
