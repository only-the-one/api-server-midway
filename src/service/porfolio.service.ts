import { Provide, Config, ALL, Inject } from '@midwayjs/decorator';
import { fixPrice, CMC_queryPortfolio, CMC_queryAllPortfolio} from '../extend/cmc';
import { RedisService } from '@midwayjs/redis';

const plCalc = (percent: number, holding: number): number => {
  return  Math.floor(holding - holding / ( 1 + percent/100));
}

@Provide()
export class PortfolioService {
  @Inject()
  redisService: RedisService;

  @Config(ALL)
  config;

  async getDetail(cmc_jwt: string): Promise<string> {
    const cmc_all_portfolio: any[] = JSON.parse(await this.redisService.get('cmc_portfolio'));
    let _msg = '';
    await Promise.all(cmc_all_portfolio.sort((b, a) => a.totalAmount - b.totalAmount).map(async _portfolio => {
      const { portfolioSourceId } = _portfolio;
      const result = await CMC_queryPortfolio(cmc_jwt, portfolioSourceId);
      const { data } = result;
      let day_total_pl = 0;
      let _total_pl = 0;
      _msg += `\n^^^^^^^^^^^^^^^^^^^^^^^^^^\n 【${_portfolio.portfolioName}】\n`;
      let item_msg = '';
      data[0].list.filter(p => p.cryptoHoldings > 50).sort((b, a) => a.holdingsPercent - b.holdingsPercent).map((item, i) => {
        const day_pl = plCalc(item.yesterdayChangePercent, item.cryptoHoldings);
        day_total_pl += day_pl;
        _total_pl += item.plValue
        item_msg += `${(item.cryptoHoldings/_portfolio.totalAmount*100).toFixed()}% `
        item_msg += `${item.symbol}: $${fixPrice(item.currentPrice)}`
        item_msg += `($${day_pl} ${item.yesterdayChangePercent.toFixed(1)}%; `
        item_msg += `$${item.plValue.toFixed()} ${(item.plPercentValue*100).toFixed()}%)  \n`
      })
      _msg += `  $${_portfolio.totalAmount.toFixed()}  ($${day_total_pl}, $${_total_pl.toFixed()}) \n^^^^^^^^^^^^^^^^^^^^^^^^^^\n` + item_msg
    }))
    return '小道统计 \n' + _msg;
  }

  async getQueryAll(cmc_jwt: string): Promise<any> {
    const result = await CMC_queryAllPortfolio(cmc_jwt);
    await this.redisService.set('cmc_portfolio', JSON.stringify(result.data));
    return result.data
  }
}
