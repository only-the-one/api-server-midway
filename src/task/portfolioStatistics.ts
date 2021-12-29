import { Provide, TaskLocal, ALL, Config, Inject } from '@midwayjs/decorator';
import { RedisService } from '@midwayjs/redis';
import { sendMessage } from '../extend/telbot';
import { CMC_queryStatistics } from '../extend/cmc';
@Provide()
export class taskPortfolioQueryStatistics {
  @Inject()
  redisService: RedisService;

  @Config(ALL)
  config;

  // 例如下面是每5分钟执行一次
  @TaskLocal('3 */5 * * * *')
  async test() {
    if(process.env.TASK_QUERY_STATISTICS !== 'true') {
      return;
    }
    const cmc_jwt = process.env.CMC_JWT;
    const cmc_all_portfolio: any[] = JSON.parse(await this.redisService.get('cmc_portfolio'));
    let _msg = '';
    await Promise.all(cmc_all_portfolio.map(async _portfolio => {
      const { portfolioSourceId } = _portfolio;
      const result = await CMC_queryStatistics(cmc_jwt, portfolioSourceId);
      const { data } = result;
      _msg += `\n================\n||  【${_portfolio.portfolioName}】\n||  total: ${data.currentTotalHoldings.toFixed()}, PL: ${data.totalPlValue.toFixed()} \n================\n`
      data.pieCharts.filter(p => p.holdings > 50).sort((b, a) => a.holdingsPercent - b.holdingsPercent).map((item, i) => {
          _msg += `${item.symbol}: ${item.holdings.toFixed()} \n`
      })
    }))
    const msg = '小道统计 \n' + _msg;
    await sendMessage(msg);
  }
}
