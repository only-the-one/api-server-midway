import {
  Controller,
  Provide,
  Inject,
  Get,
  Post,
  Put,
  Del,
  All,
  Query,
  Param,
  Body,
  ALL,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { BlogService } from '../service/blog.service';

@Provide()
@Controller('/orders')
export class Blog {
  @Inject()
  ctx: Context;

  @Inject()
  blogService: BlogService;

  @Get('/')
  async GetHandler(@Query(ALL) query: any): Promise<any> {
    return await this.blogService.Fetch(query);
  }

  @Get('/getLatest')
  async GetLatest(
    @Query() id: number,
    @Query() type: string,
    @Query() day: string
  ): Promise<any> {
    return await this.blogService.GetLatest({ _id: id, type, day });
  }

  @Get('/getWaitList')
  async GetWaitList(
    @Query() id: number,
    @Query() type: string,
    @Query() day: string
  ): Promise<any> {
    return await this.blogService.GetWaitList({ type, day });
  }

  @Get('/get3Ready')
  async Get3Ready(@Query() type: string, @Query() day: string): Promise<any> {
    return await this.blogService.get3Ready({ type, day });
  }

  @Get('/:id')
  async GetOneHandler(@Param(ALL) params: any): Promise<any> {
    return await this.blogService.FindOne({ id: params.id });
  }

  @Post('/')
  async CreateHandler(@Body(ALL) body: any): Promise<any> {
    return await this.blogService.Create(body);
  }

  @All('/all')
  async AllHandler(@Query(ALL) query: any): Promise<any> {
    return await this.blogService.GetAll(query);
  }

  @Put('/:id')
  async UpdateOneHandler(
    @Param(ALL) params: any,
    @Body(ALL) body: any
  ): Promise<any> {
    return await this.blogService.UpdateOne({ id: params.id }, body);
  }

  @Del('/:id')
  async DeleteOneHandler(@Param(ALL) params: any): Promise<any> {
    return await this.blogService.Delete({ id: params.id });
  }
}
