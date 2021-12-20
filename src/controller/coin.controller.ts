import {
  Controller,
  Provide,
  Inject,
  Get,
  // Post,
  // All,
  Query,
  // Param,
  // Body,
  ALL,
} from '@midwayjs/decorator';
import { IMidwayContext } from '@midwayjs/core';
import { CoinService } from '../service/coin.service';

@Provide()
@Controller('/coins')
export class Coin {
  @Inject()
  ctx: IMidwayContext;

  @Inject()
  coinService: CoinService;

  @Get('/')
  async GetHandler(@Query(ALL) query: any): Promise<string> {
    return this.coinService.GetAll(query);
  }
}
