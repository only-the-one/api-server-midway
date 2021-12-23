import { Provide, TaskLocal, Config } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import BlogEntity from '../entity/blog.entity';
import { Repository, In } from 'typeorm';

@Provide()
export class CheckOrderService {
  @InjectEntityModel(BlogEntity)
  blogModel: Repository<BlogEntity>;

  @Config('average_seconds')
  average_seconds: number;

  // 例如下面是每秒钟执行一次
  @TaskLocal('*/10 * * * * *')
  async test() {
    const today = new Date();
    const day = today.toJSON().split('T')[0].split('-').join('/');
    const splash = this.average_seconds * 1000;
    console.log('splash :>> ', splash);
    const expiredTime = today.getTime() - splash;
    const option = {
      day,
      status: 1,
    };
    const items = await this.blogModel.find(option);
    const ids = [];
    items.map(item => {
      const _updatedTime = new Date(item.updateDate).getTime();
      if (_updatedTime < expiredTime) {
        ids.push(item.id);
      }
    });
    const result = await this.blogModel.update(
      {
        id: In(ids),
        day,
        status: 1,
      },
      {
        status: 2,
      }
    );
    console.log('CheckOrderService => done :>> ', ids, result);
  }
}
