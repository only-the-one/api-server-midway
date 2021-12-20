import { EntityModel } from '@midwayjs/orm';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel('idmap')
export default class idmapEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  symbol: string;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  rank: number;

  @Column({ default: 0 })
  is_active: number;

  @CreateDateColumn({ nullable: true })
  first_historical_data: Date;

  @UpdateDateColumn({ nullable: true })
  last_historical_data: Date;

  @Column({ nullable: true })
  platform: string;
}
