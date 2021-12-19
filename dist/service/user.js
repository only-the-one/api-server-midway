"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const decorator_1 = require("@midwayjs/decorator");
let UserService = class UserService {
    async getUser(options) {
        return {
            uid: options.uid,
            username: 'mockedName',
            phone: '12345678901',
            email: 'xxx.xxx@xxx.com',
        };
    }
};
UserService = __decorate([
    decorator_1.Provide()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaHlna3VpL0Rlc2t0b3AvdGVtcC1kaXIvbWlkd2F5LWdoaC9zcmMvIiwic291cmNlcyI6WyJzZXJ2aWNlL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBSTlDLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFxQjtRQUNqQyxPQUFPO1lBQ0wsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2hCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLEtBQUssRUFBRSxpQkFBaUI7U0FDekIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBVFksV0FBVztJQUR2QixtQkFBTyxFQUFFO0dBQ0csV0FBVyxDQVN2QjtBQVRZLGtDQUFXIn0=