import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type WebPerformanceDocument = HydratedDocument<WebPerformance>;

@Schema()
@ObjectType({ description: 'webPerformance ' })
export class WebPerformance {
  // @Prop() // Mongoose assigns each of your schemas an id virtual getter by default which returns the document's _id field
  @Field(type => ID)
  id: string;

  @Prop()
  @Field(type => Number, { nullable: true, description: '上报时间' })
  time: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: 'dom开始渲染时间' })
  domLoading: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: '页面导航开始时间' })
  navigationStart: number;
  
  @Prop()
  @Field(type => Number, { nullable: true, description: '重定向完成时间' })
  redirectEnd: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: '重定向开始时间' })
  redirectStart: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: 'dom渲染完成时间' })
  domComplete: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: '页面加载完成时间' })
  loadEventEnd: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: '页面卸载完成时间' })
  unloadEventEnd: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: '页面卸载开始时间' })
  unloadEventStart: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: '请求收到结果的时间' })
  responseEnd: number;

  @Prop()
  @Field(type => Number, { nullable: true, description: '请求发送时间' })
  requestStart: number;
}

export const WebPerformanceSchema = SchemaFactory.createForClass(WebPerformance);