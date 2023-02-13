import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ResourcePerformanceDocument = HydratedDocument<ResourcePerformance>;

@Schema()
@ObjectType({ description: 'resourcePerformance ' })
export class ResourcePerformance {
  // @Prop() // Mongoose assigns each of your schemas an id virtual getter by default which returns the document's _id field
  @Field((type) => ID)
  id: string;

  @Prop()
  @Field({ nullable: true, description: 'entry的名称' })
  name: string;

  @Prop()
  @Field({ nullable: true, description: 'entry的类型' })
  entryType: string;

  @Prop()
  @Field((type) => Number, { nullable: true, description: 'entry开始的时间' })
  startTime: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: 'entry持续的时间' })
  duration: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '上报时间' })
  time: number;

  @Prop()
  @Field({ nullable: true, description: '加载器' })
  initiatorType: string;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '页面导航开始时间' })
  domainLookupStart: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '页面导航开始时间' })
  domainLookupEnd: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '重定向完成时间' })
  redirectEnd: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '重定向开始时间' })
  redirectStart: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: 'dom渲染完成时间' })
  connectStart: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '页面加载完成时间' })
  connectEnd: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '页面卸载完成时间' })
  fetchStart: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '页面卸载开始时间' })
  responseStart: number;

  @Prop()
  @Field((type) => Number, {
    nullable: true,
    description: '请求收到结果的时间',
  })
  responseEnd: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '请求发送时间' })
  requestStart: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '请求发送时间' })
  responseStatus: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '请求发送时间' })
  secureConnectionStart: number;

  @Prop()
  @Field((type) => Number, { nullable: true, description: '请求发送时间' })
  workerStart: number;
}

export const ResourcePerformanceSchema =
  SchemaFactory.createForClass(ResourcePerformance);
