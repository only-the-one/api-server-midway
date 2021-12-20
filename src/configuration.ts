import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as orm from '@midwayjs/orm';
import * as redis from '@midwayjs/redis';
import * as task from '@midwayjs/task';
import { Application } from 'egg';
import { join } from 'path';
import * as axios from '@midwayjs/axios';
require('dotenv').config();

@Configuration({
  imports: [orm, axios, task, redis],
  importConfigs: [join(__dirname, './config')],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
