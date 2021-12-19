"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.default = (appInfo) => {
    const config = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1639636965923_3310';
    // add your config here
    config.middleware = [];
    config.midwayFeature = {
        // true 代表使用 midway logger
        // false 或者为空代表使用 egg-logger
        replaceEggLogger: true,
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
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2h5Z2t1aS9EZXNrdG9wL3RlbXAtZGlyL21pZHdheS1naGgvc3JjLyIsInNvdXJjZXMiOlsiY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBSzdCLGtCQUFlLENBQUMsT0FBbUIsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sTUFBTSxHQUFHLEVBQW1CLENBQUM7SUFFbkMsdUVBQXVFO0lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUVuRCx1QkFBdUI7SUFDdkIsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFFdkIsTUFBTSxDQUFDLGFBQWEsR0FBRztRQUNyQiwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLGdCQUFnQixFQUFFLElBQUk7S0FDdkIsQ0FBQztJQUVGLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsS0FBSztJQUVMOztPQUVHO0lBQ0gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHVEQUF1RDtJQUN2RCxvQkFBb0I7SUFDcEIsS0FBSztJQUVMLE1BQU0sTUFBTSxHQUFHO1FBQ2IsSUFBSSxFQUFFLFFBQVE7UUFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUM7UUFDbkQsV0FBVyxFQUFFLElBQUk7UUFDakIsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDO0lBRUY7O09BRUc7SUFDSCxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUVwQixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMifQ==