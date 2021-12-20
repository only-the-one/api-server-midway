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
// import idmapEntity from '../entity/idmap';

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

  @Get('/match')
  async GetMathed(@Query() keyword: string): Promise<string> {
    return this.idmapService.getMatched(keyword);
  }

  @Get('/fetch')
  async Fetch(@Query(ALL) query: any): Promise<any> {
    // 只需运行一次，获取所有的数据, 后期运行的时候，传递_start参数
    const { _start = 1 } = query;
    const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));
    const fetchAndSave = async (start: number, limit: number): Promise<any> => {
      await sleep((start - _start) * 3);
      const items = await getAllCoins({ start, limit });
      console.log('items :>> ', items.length);
      if (items && items.length > 0) {
        await getConnection()
          .createQueryBuilder()
          .insert()
          .into('idmap')
          .values(items)
          .execute();
      }
    };
    const limit = 300;
    for (let start = _start; start < 50000; ) {
      await fetchAndSave(start, limit);
      start += limit;
    }
  }
}
