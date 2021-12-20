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
import { IdmapService } from '../service/idmap';
import { getAllCoins } from '../extend/cmc';
import { getConnection } from 'typeorm';
import idmapEntity from '../entity/idmap';

@Provide()
@Controller('/idmaps')
export class IdMap {
  @Inject()
  ctx: IMidwayContext;

  @Inject()
  idmapService: IdmapService;

  @Get('/')
  async GetHandler(@Query(ALL) query: any): Promise<string> {
    return this.idmapService.GetAll(query);
  }

  @Get('/fetch')
  async Fetch(@Query(ALL) query: any): Promise<any> {
    const { start = 0, limit = 10 } = query;
    const items = await getAllCoins({ start, limit });
    console.log('items :>> ', items.length, items[1]);
    if (items && items.length > 0) {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(idmapEntity)
        .values(items)
        .execute();
    }
  }
}
