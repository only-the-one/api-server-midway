import { Provide, Controller, ALL, Config, Inject, Get } from '@midwayjs/decorator';
import { fixPrice, CMC_queryPortfolio } from '../extend/cmc';
import { RedisService } from '@midwayjs/redis';
import { Context } from 'egg';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Inject()
  redisService: RedisService;

  @Config(ALL)
  config;

  @Get('/')
  async home() {
    return "help your self, protect your money and make profit. with love midway & eggjs & nodejs"
  }

  @Get('/p')
  async p_detail() {
    const cmc_jwt = process.env.CMC_JWT;
    const cmc_all_portfolio: any[] = JSON.parse(await this.redisService.get('cmc_portfolio'));
    let _msg = '';
    await Promise.all(cmc_all_portfolio.map(async _portfolio => {
      const { portfolioSourceId } = _portfolio;
      const result = await CMC_queryPortfolio(cmc_jwt, portfolioSourceId);
      const { data } = result;
      _msg += `\n================\n$【{_portfolio.portfolioName}】 $${_portfolio.totalAmount.toFixed()} \n================\n`
      data[0].list.filter(p => p.cryptoHoldings > 50).sort((b, a) => a.holdingsPercent - b.holdingsPercent).map((item, i) => {
        _msg += `${item.symbol}: $${fixPrice(item.currentPrice)} ($${item.plValue.toFixed()}/${item.cryptoHoldings.toFixed()}) ${(item.plPercentValue*100).toFixed(2)}% \n`
      })
    }))
    const msg = '小道消息 \n' + _msg;
    return msg;
  }


}
