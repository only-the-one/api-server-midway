const path = require('path');
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639636965923_3310';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  config.security = {
    domainWhiteList: [
      'http://127.0.0.1:8010',
      'http://127.0.0.1:8080',
      'http://127.0.0.1',
    ], //  允许跨域的域名
  };

  // config.security = {
  //   csrf: false,
  // };

  /**
   * 单数据库实例
   */
  //  const mysql = {
  //   type: 'mysql',
  //   host: '',
  //   port: 3306,
  //   username: '',
  //   password: '',
  //   database: undefined,
  //   synchronize: false, // 如果第一次使用，不存在表，有同步的需求可以写 true
  //   logging: false,
  // };

  const sqlite = {
    type: 'sqlite',
    database: path.join(__dirname, '../../test.sqlite'),
    synchronize: true,
    logging: true,
  };

  /**
   * 单数据库实例
   */
  config.orm = sqlite;

  config.taskConfig = {
    redis: 'redis://127.0.0.1:6379', //任务依赖redis，所以此处需要加一个redis
    prefix: 'midway-hsjc', // 这些任务存储的key，都是midway-task开头，以便区分用户原有redis里面的配置。
    defaultJobOptions: {
      repeat: {
        tz: 'Asia/Shanghai', // Task等参数里面设置的比如（0 0 0 * * *）本来是为了0点执行，但是由于时区不对，所以国内用户时区设置一下。
      },
    },
  };

  config.average_seconds = 120;
  return config;
};
