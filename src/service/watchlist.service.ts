import { Provide } from '@midwayjs/decorator';
import watchlistEntity from '../entity/watchlist';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';

@Provide()
export class WatchlistService {
  @InjectEntityModel('watchlist')
  WatchlistModel: Repository<watchlistEntity>;

  async GetAll(query: any): Promise<any> {
    return this.WatchlistModel.find(query);
  }

  async PostService() {
    return 'Post';
  }
}
