import { EntityModel } from '@midwayjs/orm';
import {
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
} from 'typeorm';

@EntityModel('portfolio_item')
export default class portfolioItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cryptocurrencyId: number;

  @Column({ nullable: true })
  name: string;

  @Column({ default: 0 })
  amount: number;

  @Column({ default: 0 })
  cryptoHoldings: number;

  @Column({ default: 0 })
  plPercentValue: number;

  @Column({ default: 0 })
  plValue: number;

  @Column({ default: 0 })
  currentPrice: number;

  @Column({ default: 0 })
  yesterdayChangePercent: number;

  @Column({ default: 0 })
  holdingsPercent: number;

  @Column({ default: 0 })
  totalFee: number;

  @Column({ default: 0 })
  buyAvgPrice: number;

  @Column({ nullable: true })
  symbol: string;

  @Column({ nullable: true })
  slug: string;

  @UpdateDateColumn({ nullable: true })
  lastUpdated: Date;
}
