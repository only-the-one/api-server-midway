import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import BlogEntity from '../entity/blog.entity';
import { Repository, LessThan, Not } from 'typeorm';

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

  async UpdateOne(query: any, option: any) {
    const blogToUpdate = await this.blogModel.findOne(query);
    Object.assign(blogToUpdate, option);
    blogToUpdate.updateDate = new Date();
    await this.blogModel.save(blogToUpdate);
  }

  async get3Ready({ type, day }) {
    return await this.blogModel.find({
      where: {
        status: 0,
        type,
        day,
      },
      order: {
        id: 'ASC',
      },
      take: 3,
    });
  }

  async GetLatest({ _id, type, day }) {
    const waitAmount = await this.blogModel.count({
      status: LessThan(2),
      id: LessThan(_id),
      type,
      day,
    });
    const waitList = await this.blogModel.find({
      where: {
        status: LessThan(2),
        type,
        day,
      },
      order: {
        id: 'ASC',
      },
      take: 30,
    });
    return {
      waitAmount,
      waitList,
    };
  }

  async GetWaitList({ type, day }) {
    const done = await this.blogModel.count({
      status: 2,
      type,
      day,
    });
    const total = await this.blogModel.count({
      status: Not(3),
      type,
      day,
    });
    const waitList = await this.blogModel.find({
      where: {
        status: LessThan(2),
        type,
        day,
      },
      order: {
        id: 'ASC',
      },
      take: 50,
    });
    return {
      done,
      total,
      waitList,
    };
  }

  async Delete(query: any) {
    const blogToUpdate = await this.blogModel.findOne(query);
    await this.blogModel.remove(blogToUpdate);
  }
}
