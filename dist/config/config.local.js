"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.security = void 0;
/**
 * 这里加入这段是因为 egg 默认的安全策略，在 post 请求的时候如果不传递 token 会返回 403
 * 由于大部分新手用户不太了解这个机制，所以在本地和单测环境做了默认处理
 * 请注意，线上环境依旧会有该错误，需要手动开启
 * 如果想了解更多细节，请访问 https://eggjs.org/zh-cn/core/security.html#安全威胁-csrf-的防范
 */
exports.security = {
    csrf: false,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmxvY2FsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oeWdrdWkvRGVza3RvcC90ZW1wLWRpci9taWR3YXktZ2hoL3NyYy8iLCJzb3VyY2VzIjpbImNvbmZpZy9jb25maWcubG9jYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7O0dBS0c7QUFDVSxRQUFBLFFBQVEsR0FBRztJQUN0QixJQUFJLEVBQUUsS0FBSztDQUNaLENBQUMifQ==