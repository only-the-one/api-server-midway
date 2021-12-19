"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIController = void 0;
const decorator_1 = require("@midwayjs/decorator");
const user_1 = require("../service/user");
let APIController = class APIController {
    async getUser(uid) {
        const user = await this.userService.getUser({ uid });
        return { success: true, message: 'OK', data: user };
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], APIController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", user_1.UserService)
], APIController.prototype, "userService", void 0);
__decorate([
    decorator_1.Post('/get_user'),
    __param(0, decorator_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], APIController.prototype, "getUser", null);
APIController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/api')
], APIController);
exports.APIController = APIController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oeWdrdWkvRGVza3RvcC90ZW1wLWRpci9taWR3YXktZ2hoL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUErRTtBQUcvRSwwQ0FBOEM7QUFJOUMsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQVF4QixLQUFLLENBQUMsT0FBTyxDQUFVLEdBQVc7UUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztDQUNGLENBQUE7QUFWQztJQURDLGtCQUFNLEVBQUU7OzBDQUNJO0FBR2I7SUFEQyxrQkFBTSxFQUFFOzhCQUNJLGtCQUFXO2tEQUFDO0FBR3pCO0lBREMsZ0JBQUksQ0FBQyxXQUFXLENBQUM7SUFDSCxXQUFBLGlCQUFLLEVBQUUsQ0FBQTs7Ozs0Q0FHckI7QUFYVSxhQUFhO0lBRnpCLG1CQUFPLEVBQUU7SUFDVCxzQkFBVSxDQUFDLE1BQU0sQ0FBQztHQUNOLGFBQWEsQ0FZekI7QUFaWSxzQ0FBYSJ9