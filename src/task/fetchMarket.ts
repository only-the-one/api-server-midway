import { Provide, TaskLocal, ALL, Config, Inject } from '@midwayjs/decorator';
import { RedisService } from '@midwayjs/redis';
import { WatchlistService } from '../service/watchlist.service';
import { currency } from '../extend/cmc';
@Provide()
export class taskMarket {
  @Inject()
  redisService: RedisService;

  @Inject()
  watchlist: WatchlistService;

  @Config(ALL)
  config;

  // 例如下面是每15分钟执行一次
  @TaskLocal('10 */15 * * * *')
  async fetchMarket() {
    return;
    const coins = process.env.COIN_WATCHLIST;
    const result = await currency(coins);
    console.log('result :>> ', result);
  }
}
