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
exports.Blog = void 0;
const decorator_1 = require("@midwayjs/decorator");
const blog_service_1 = require("../service/blog.service");
let Blog = class Blog {
    async GetHandler(query) {
        return await this.blogService.Fetch(query);
    }
    async GetOneHandler(params) {
        return await this.blogService.FindOne({ id: params.id });
    }
    async CreateHandler(body) {
        return await this.blogService.Create(body);
    }
    async AllHandler(query) {
        return await this.blogService.GetAll(query);
    }
    async UpdateOneHandler(params, body) {
        return await this.blogService.UpdateOne({ id: params.id }, body);
    }
    async DeleteOneHandler(params) {
        return await this.blogService.Delete({ id: params.id });
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], Blog.prototype, "ctx", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", blog_service_1.BlogService)
], Blog.prototype, "blogService", void 0);
__decorate([
    decorator_1.Get('/'),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Blog.prototype, "GetHandler", null);
__decorate([
    decorator_1.Get('/:id'),
    __param(0, decorator_1.Param(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Blog.prototype, "GetOneHandler", null);
__decorate([
    decorator_1.Post('/'),
    __param(0, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Blog.prototype, "CreateHandler", null);
__decorate([
    decorator_1.All('/all'),
    __param(0, decorator_1.Query(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Blog.prototype, "AllHandler", null);
__decorate([
    decorator_1.Put('/:id'),
    __param(0, decorator_1.Param(decorator_1.ALL)),
    __param(1, decorator_1.Body(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], Blog.prototype, "UpdateOneHandler", null);
__decorate([
    decorator_1.Del('/:id'),
    __param(0, decorator_1.Param(decorator_1.ALL)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Blog.prototype, "DeleteOneHandler", null);
Blog = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/blog')
], Blog);
exports.Blog = Blog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oeWdrdWkvRGVza3RvcC90ZW1wLWRpci9taWR3YXktZ2hoL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIvYmxvZy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQWdCNkI7QUFFN0IsMERBQXNEO0FBSXRELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7SUFRZixLQUFLLENBQUMsVUFBVSxDQUFhLEtBQWM7UUFDekMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxLQUFLLENBQUMsYUFBYSxDQUFhLE1BQVc7UUFDekMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFHRCxLQUFLLENBQUMsYUFBYSxDQUFZLElBQVM7UUFDdEMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFHRCxLQUFLLENBQUMsVUFBVSxDQUFhLEtBQVU7UUFDckMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHRCxLQUFLLENBQUMsZ0JBQWdCLENBQ1IsTUFBVyxFQUNaLElBQVM7UUFFcEIsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBR0QsS0FBSyxDQUFDLGdCQUFnQixDQUFhLE1BQVc7UUFDNUMsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FPRixDQUFBO0FBM0NDO0lBREMsa0JBQU0sRUFBRTs7aUNBQ0k7QUFHYjtJQURDLGtCQUFNLEVBQUU7OEJBQ0ksMEJBQVc7eUNBQUM7QUFHekI7SUFEQyxlQUFHLENBQUMsR0FBRyxDQUFDO0lBQ1MsV0FBQSxpQkFBSyxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3NDQUUzQjtBQUdEO0lBREMsZUFBRyxDQUFDLE1BQU0sQ0FBQztJQUNTLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7Ozt5Q0FFOUI7QUFHRDtJQURDLGdCQUFJLENBQUMsR0FBRyxDQUFDO0lBQ1csV0FBQSxnQkFBSSxDQUFDLGVBQUcsQ0FBQyxDQUFBOzs7O3lDQUU3QjtBQUdEO0lBREMsZUFBRyxDQUFDLE1BQU0sQ0FBQztJQUNNLFdBQUEsaUJBQUssQ0FBQyxlQUFHLENBQUMsQ0FBQTs7OztzQ0FFM0I7QUFHRDtJQURDLGVBQUcsQ0FBQyxNQUFNLENBQUM7SUFFVCxXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7SUFDVixXQUFBLGdCQUFJLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7NENBR1g7QUFHRDtJQURDLGVBQUcsQ0FBQyxNQUFNLENBQUM7SUFDWSxXQUFBLGlCQUFLLENBQUMsZUFBRyxDQUFDLENBQUE7Ozs7NENBRWpDO0FBdENVLElBQUk7SUFGaEIsbUJBQU8sRUFBRTtJQUNULHNCQUFVLENBQUMsT0FBTyxDQUFDO0dBQ1AsSUFBSSxDQTZDaEI7QUE3Q1ksb0JBQUkifQ==