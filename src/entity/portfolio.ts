import { EntityModel } from '@midwayjs/orm';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel('portfolio')
export default class portfolioEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  portfolioSourceId: string;

  @Column({ nullable: true })
  portfolioName: string;

  @Column({ default: 0 })
  totalAmount: number;

  @Column({ nullable: true })
  bgColor: string;

  @Column({ default: 0 })
  sortIndex: number;

  @Column({ default: false })
  isMain: boolean;

  @CreateDateColumn({ nullable: true })
  timeCreated: Date;

  @UpdateDateColumn({ nullable: true })
  timeUpdated: Date;
}
