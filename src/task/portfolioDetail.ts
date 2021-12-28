import { Provide, TaskLocal, ALL, Config, Inject } from '@midwayjs/decorator';
import { RedisService } from '@midwayjs/redis';
import { sendMessage } from '../extend/telbot';
import { CMC_queryPortfolio } from '../extend/cmc';

const fixPrice = (price: number): string => {
  if (price > 100) {
    return price.toFixed();
  } else if (price > 10) {
    return price.toFixed(1);
  } else if (price > 1) {
    return price.toFixed(2);
  }
  else if (price > 0.1) {
    return price.toFixed(3);
  }
  else if (price > 0.001) {
    return price.toFixed(4);
  } else {
    return price.toFixed(8);
  }
}
@Provide()
export class taskPortfolioQueryDetail {
  @Inject()
  redisService: RedisService;

  @Config(ALL)
  config;

  // 例如下面是每小时执行一次
  @TaskLocal('8 58 * * * *')
  async test() {
    const cmc_jwt = process.env.CMC_JWT;
    const cmc_all_portfolio: any[] = JSON.parse(await this.redisService.get('cmc_portfolio'));
    let _msg = '';
    await Promise.all(cmc_all_portfolio.map(async _portfolio => {
      const { portfolioSourceId } = _portfolio;
      const result = await CMC_queryPortfolio(cmc_jwt, portfolioSourceId);
      const { data } = result;
      _msg += `\n================\n${_portfolio.portfolioName}】 $${_portfolio.totalAmount.toFixed()} \n================\n`
      data[0].list.filter(p => p.cryptoHoldings > 50).sort((b, a) => a.holdingsPercent - b.holdingsPercent).map((item, i) => {
        _msg += `${item.symbol}: $${fixPrice(item.currentPrice)} ($${item.plValue.toFixed()}/${item.cryptoHoldings.toFixed()}) ${(item.plPercentValue*100).toFixed(2)}% \n`
      })
    }))
    console.log(msg);
    await sendMessage(msg);
  }
}
