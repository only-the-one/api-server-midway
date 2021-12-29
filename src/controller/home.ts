import { Provide, Controller, ALL, Config, Inject, Get } from '@midwayjs/decorator';
import { PortfolioService } from '../service/porfolio.service'
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

  @Inject()
  portfolioService: PortfolioService;


  @Get('/')
  async home() {
    return "help your self, protect your money and make profit. with love midway & eggjs & nodejs"
  }

  @Get('/p')
  async p_detail() {
    const cmc_jwt = process.env.CMC_JWT;
    const msg = await this.portfolioService.getDetail(cmc_jwt);
    return msg
  }
}
