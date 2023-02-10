import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWebPerformanceInput {
  @Field(type => Number, { nullable: true, description: 'dom开始渲染时间' })
  domLoading: number;

  @Field(type => Number, { nullable: true, description: '页面导航开始时间' })
  navigationStart: number;
  
  @Field(type => Number, { nullable: true, description: '重定向完成时间' })
  redirectEnd: number;

  @Field(type => Number, { nullable: true, description: '重定向开始时间' })
  redirectStart: number;

  @Field(type => Number, { nullable: true, description: 'dom渲染完成时间' })
  domComplete: number;

  @Field(type => Number, { nullable: true, description: '页面加载完成时间' })
  loadEventEnd: number;

  @Field(type => Number, { nullable: true, description: '页面卸载完成时间' })
  unloadEventEnd: number;

  @Field(type => Number, { nullable: true, description: '页面卸载开始时间' })
  unloadEventStart: number;

  @Field(type => Number, { nullable: true, description: '请求收到结果的时间' })
  responseEnd: number;

  @Field(type => Number, { nullable: true, description: '请求发送时间' })
  requestStart: number;
}
