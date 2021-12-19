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
exports.ContainerLifeCycle = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm = require("@midwayjs/orm");
const egg_1 = require("egg");
const path_1 = require("path");
const axios = require("@midwayjs/axios");
let ContainerLifeCycle = class ContainerLifeCycle {
    async onReady() { }
};
__decorate([
    decorator_1.App(),
    __metadata("design:type", egg_1.Application)
], ContainerLifeCycle.prototype, "app", void 0);
ContainerLifeCycle = __decorate([
    decorator_1.Configuration({
        imports: [orm, axios],
        importConfigs: [path_1.join(__dirname, './config')],
        conflictCheck: true,
    })
], ContainerLifeCycle);
exports.ContainerLifeCycle = ContainerLifeCycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaHlna3VpL0Rlc2t0b3AvdGVtcC1kaXIvbWlkd2F5LWdoaC9zcmMvIiwic291cmNlcyI6WyJjb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUF5RDtBQUV6RCxxQ0FBcUM7QUFDckMsNkJBQWtDO0FBQ2xDLCtCQUE0QjtBQUM1Qix5Q0FBeUM7QUFPekMsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFJN0IsS0FBSyxDQUFDLE9BQU8sS0FBSSxDQUFDO0NBQ25CLENBQUE7QUFIQztJQURDLGVBQUcsRUFBRTs4QkFDRCxpQkFBVzsrQ0FBQztBQUZOLGtCQUFrQjtJQUw5Qix5QkFBYSxDQUFDO1FBQ2IsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztRQUNyQixhQUFhLEVBQUUsQ0FBQyxXQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLGFBQWEsRUFBRSxJQUFJO0tBQ3BCLENBQUM7R0FDVyxrQkFBa0IsQ0FLOUI7QUFMWSxnREFBa0IifQ==