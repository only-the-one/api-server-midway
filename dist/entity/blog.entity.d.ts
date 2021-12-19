import { BaseEntity } from 'typeorm';
export default class BlogEntity extends BaseEntity {
    id: number;
    title: string;
    createDate: Date;
    updateDate: Date;
}
