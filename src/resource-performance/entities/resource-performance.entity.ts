import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType({ description: 'resourcePerformance ' })
export class ResourcePerformance {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  // timestamps 参数会让 Mongoose 自动开启创建时间和更新时间。
  @CreateDateColumn()
  @Field(() => Number, { nullable: true, description: 'entry的名称' })
  createdAt: number;

  @UpdateDateColumn()
  @Field(() => Number, { nullable: true, description: 'entry的名称' })
  updatedAt: number;

  @Column({ nullable: true })
  @Field({ nullable: true, description: '用户id' })
  usrId: string;

  @Column({ nullable: true })
  @Field({ nullable: true, description: '设备id' })
  dvcId: string;

  @Column({ nullable: true })
  @Field({ nullable: true, description: 'entry的名称' })
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true, description: 'entry的类型' })
  entryType: string;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: 'entry开始的时间' })
  startTime: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: 'entry持续的时间' })
  duration: number;

  @Column('bigint', { nullable: true })
  @Field(() => Number, { nullable: true, description: '上报批次号' })
  reportTime: number;

  @Column({ nullable: true })
  @Field({ nullable: true, description: '加载器' })
  initiatorType: string;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '页面导航开始时间' })
  domainLookupStart: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '页面导航开始时间' })
  domainLookupEnd: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '重定向完成时间' })
  redirectEnd: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '重定向开始时间' })
  redirectStart: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: 'dom渲染完成时间' })
  connectStart: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '页面加载完成时间' })
  connectEnd: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '页面卸载完成时间' })
  fetchStart: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '页面卸载开始时间' })
  responseStart: number;

  @Column({ nullable: true })
  @Field(() => Number, {
    nullable: true,
    description: '请求收到结果的时间',
  })
  responseEnd: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '请求发送时间' })
  requestStart: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '请求发送时间' })
  responseStatus: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '请求发送时间' })
  secureConnectionStart: number;

  @Column({ nullable: true })
  @Field(() => Number, { nullable: true, description: '请求发送时间' })
  workerStart: number;
}
