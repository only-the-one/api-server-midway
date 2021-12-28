import { Provide, TaskLocal, ALL, Config, Inject } from '@midwayjs/decorator';
import { RedisService } from '@midwayjs/redis';
// import { sendMessage } from '../extend/telbot';
import { CMC_queryAllPortfolio } from '../extend/cmc';
@Provide()
export class taskPortfolioQueryAll {
  @Inject()
  redisService: RedisService;

  @Config(ALL)
  config;

  // 例如下面是每3分钟执行一次
  @TaskLocal('5 */3 * * * *')
  async test() {
    const cmc_jwt = process.env.CMC_JWT;
    const result = await CMC_queryAllPortfolio(cmc_jwt);
    await this.redisService.set('cmc_portfolio', JSON.stringify(result.data));

    // 监控前后变动 太大了就需要注意了？ 有意义吗？
    // let _msg = '';
    // if (status.error_code === '0') {
    //   data.map(item => {
    //     _msg += item.portfolioName + ': ' + item.totalAmount.toFixed(0) + '\n';
    //   });
    // }
  }
}
