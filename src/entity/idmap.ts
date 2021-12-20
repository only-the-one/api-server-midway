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

  @Column()
  slugin: string;

  @Column()
  symbol: string;

  @Column()
  rank: number;

  @Column()
  platform: string;

  @Column()
  is_active: boolean;

  @Column()
  amount: number;

  @CreateDateColumn()
  first_historical_data: Date;

  @UpdateDateColumn()
  last_historical_data: Date;
}
