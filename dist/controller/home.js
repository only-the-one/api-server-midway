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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const decorator_1 = require("@midwayjs/decorator");
let HomeController = class HomeController {
    async home() {
        return 'Hello Midwayjs! zzz';
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], HomeController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "home", null);
HomeController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/')
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaHlna3VpL0Rlc2t0b3AvdGVtcC1kaXIvbWlkd2F5LWdoaC9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVyL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXVFO0FBS3ZFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFLekIsS0FBSyxDQUFDLElBQUk7UUFDUixPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBO0FBTkM7SUFEQyxrQkFBTSxFQUFFOzsyQ0FDSTtBQUdiO0lBREMsZUFBRyxDQUFDLEdBQUcsQ0FBQzs7OzswQ0FHUjtBQVBVLGNBQWM7SUFGMUIsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsR0FBRyxDQUFDO0dBQ0gsY0FBYyxDQVExQjtBQVJZLHdDQUFjIn0=
