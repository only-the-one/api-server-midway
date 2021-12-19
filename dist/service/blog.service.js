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
exports.BlogService = void 0;
const decorator_1 = require("@midwayjs/decorator");
const orm_1 = require("@midwayjs/orm");
const blog_entity_1 = require("../entity/blog.entity");
const typeorm_1 = require("typeorm");
let BlogService = class BlogService {
    async GetAll(query) {
        return await this.blogModel.find(query);
    }
    async Fetch(query) {
        return await this.blogModel.find(query);
    }
    async FindOne(query) {
        return await this.blogModel.findOne(query);
    }
    async Create(data) {
        const blog = new blog_entity_1.default();
        Object.assign(blog, data);
        const result = await this.blogModel.save(blog);
        console.log('result :>> ', result);
        return result;
    }
    async UpdateOne(option, query) {
        const blogToUpdate = await this.blogModel.findOne(query);
        Object.assign(blogToUpdate, option);
        await this.blogModel.save(blogToUpdate);
    }
    async Delete(query) {
        const blogToUpdate = await this.blogModel.findOne(query);
        await this.blogModel.remove(blogToUpdate);
    }
};
__decorate([
    orm_1.InjectEntityModel(blog_entity_1.default),
    __metadata("design:type", typeorm_1.Repository)
], BlogService.prototype, "blogModel", void 0);
BlogService = __decorate([
    decorator_1.Provide()
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oeWdrdWkvRGVza3RvcC90ZW1wLWRpci9taWR3YXktZ2hoL3NyYy8iLCJzb3VyY2VzIjpbInNlcnZpY2UvYmxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1Q0FBa0Q7QUFDbEQsdURBQStDO0FBQy9DLHFDQUFxQztBQUdyQyxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBSXRCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBVTtRQUNyQixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBVTtRQUNwQixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBVTtRQUN0QixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBUztRQUNwQixNQUFNLElBQUksR0FBRyxJQUFJLHFCQUFVLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQVcsRUFBRSxLQUFVO1FBQ3JDLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFVO1FBQ3JCLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0YsQ0FBQTtBQWhDQztJQURDLHVCQUFpQixDQUFDLHFCQUFVLENBQUM7OEJBQ25CLG9CQUFVOzhDQUFhO0FBRnZCLFdBQVc7SUFEdkIsbUJBQU8sRUFBRTtHQUNHLFdBQVcsQ0FrQ3ZCO0FBbENZLGtDQUFXIn0=