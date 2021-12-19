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
  // HttpCode,
  // SetHeader,
  // ContentType,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { BlogService } from '../service/blog.service';

@Provide()
@Controller('/blog')
export class Blog {
  @Inject()
  ctx: Context;

  @Inject()
  blogService: BlogService;

  @Get('/')
  async GetHandler(@Query(ALL) query: unknown): Promise<any> {
    return await this.blogService.Fetch(query);
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

  // @Get('/html')
  // @ContentType('text/html')
  // async HTMLHandler(@Query(ALL) query: unknown): Promise<string> {
  //   return '<body><h1>Hello Midwayjs!</h1></body>';
  // }
}
