import { EntityModel } from '@midwayjs/orm';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel('blog')
export default class BlogEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '名字' })
  name: string;

  @Column({ comment: '带老人小孩｜个人一码通' })
  type: string;

  @Column({ comment: '手机号后四位' })
  code4: string;

  @Column({ comment: '数量' }) // enum: [1, 2, 3] })
  amount: number;

  @Column({ comment: '状态' }) // enum: [0, 1, 2, 3] }) // ['已预约', '现场检录', '已完成', '已作废'] })
  status: number;

  @Column({ comment: '日期' })
  day: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
