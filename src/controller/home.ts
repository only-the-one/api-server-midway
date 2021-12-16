import { Inject, Controller, Provide, Get } from '@midwayjs/decorator';

import { Context } from 'egg';
@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }
}
