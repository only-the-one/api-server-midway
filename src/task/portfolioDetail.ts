import { Provide, TaskLocal, Inject } from '@midwayjs/decorator';
import { sendMessage } from '../extend/telbot';
import { PortfolioService } from '../service/porfolio.service';

@Provide()
export class taskPortfolioQueryDetail {
  @Inject()
  portfolioService: PortfolioService;

  // 例如下面是每1小时执行一次
  @TaskLocal('8 58 * * * *')
  async test() {
    if(process.env.TASK_QUERY_DETAIL !== 'true') {
      return;
    }
    const cmc_jwt = process.env.CMC_JWT;
    const msg = await this.portfolioService.getDetail(cmc_jwt);
    await sendMessage(msg);
  }
}
