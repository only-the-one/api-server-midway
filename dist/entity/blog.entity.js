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
const orm_1 = require("@midwayjs/orm");
const typeorm_1 = require("typeorm");
let BlogEntity = class BlogEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], BlogEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], BlogEntity.prototype, "createDate", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], BlogEntity.prototype, "updateDate", void 0);
BlogEntity = __decorate([
    orm_1.EntityModel('blog')
], BlogEntity);
exports.default = BlogEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2h5Z2t1aS9EZXNrdG9wL3RlbXAtZGlyL21pZHdheS1naGgvc3JjLyIsInNvdXJjZXMiOlsiZW50aXR5L2Jsb2cuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLHFDQU1pQjtBQUdqQixJQUFxQixVQUFVLEdBQS9CLE1BQXFCLFVBQVcsU0FBUSxvQkFBVTtDQVlqRCxDQUFBO0FBVkM7SUFEQyxnQ0FBc0IsRUFBRTs7c0NBQ2Q7QUFHWDtJQURDLGdCQUFNLEVBQUU7O3lDQUNLO0FBR2Q7SUFEQywwQkFBZ0IsRUFBRTs4QkFDUCxJQUFJOzhDQUFDO0FBR2pCO0lBREMsMEJBQWdCLEVBQUU7OEJBQ1AsSUFBSTs4Q0FBQztBQVhFLFVBQVU7SUFEOUIsaUJBQVcsQ0FBQyxNQUFNLENBQUM7R0FDQyxVQUFVLENBWTlCO2tCQVpvQixVQUFVIn0=