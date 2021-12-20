import { Provide, TaskLocal, ALL, Config, Inject } from '@midwayjs/decorator';
import { RedisService } from '@midwayjs/redis';
import { sendMessage } from '../extend/telbot';
@Provide()
export class taskPortfolio {
  @Inject()
  redisService: RedisService;

  @Config(ALL)
  config;

  // 例如下面是每分15钟执行一次
  @TaskLocal('0 */15 * * * *')
  async test() {
    await this.redisService.set('foo', 'bar');
    const result = await this.redisService.get('foo');
    // 取得symboal的最新价格
    console.log('config  :>> ', process.env.COIN_WATCHLIST);
    const coins = process.env.COIN_WATCHLIST.split(',');
    coins.map(coin => {
      console.log('coin :>> ', coin);
    });
    const msg = 'calculate portfolio @' + new Date() + ' >>> ' + result;
    console.log(msg);
    await sendMessage(msg);
  }
}
