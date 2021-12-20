import { Provide } from '@midwayjs/decorator';
import coinEntity from '../entity/coin.entity';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';

@Provide()
export class CoinService {
  @InjectEntityModel('coin')
  coinModel: Repository<coinEntity>;

  async GetAll(query: any): Promise<any> {
    return this.coinModel.find(query);
  }

  async PostService() {
    return 'Post';
  }
}
