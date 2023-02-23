import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateResourcePerformanceInput {
  @Field({ nullable: true, description: 'entry的类型' })
  usrId: string;

  @Field({ nullable: true, description: 'entry的类型' })
  dvcId: string;

  @Field({ nullable: true, description: 'entry的名称' })
  name: string;

  @Field({ nullable: true, description: 'entry的名称' })
  reportTime: number;

  @Field({ nullable: true, description: 'entry的类型' })
  entryType: string;

  @Field((type) => Number, { nullable: true, description: '' })
  duration: number;

  @Field({ nullable: true, description: '' })
  initiatorType: string;

  @Field((type) => Number, { nullable: true, description: '' })
  domainLookupStart: number;

  @Field((type) => Number, { nullable: true, description: '' })
  domainLookupEnd: number;

  @Field((type) => Number, { nullable: true, description: '' })
  redirectEnd: number;

  @Field((type) => Number, { nullable: true, description: '' })
  redirectStart: number;

  @Field((type) => Number, { nullable: true, description: '' })
  connectStart: number;

  @Field((type) => Number, { nullable: true, description: '' })
  connectEnd: number;

  @Field((type) => Number, { nullable: true, description: '' })
  fetchStart: number;

  @Field((type) => Number, { nullable: true, description: '' })
  responseStart: number;

  @Field((type) => Number, { nullable: true, description: '' })
  responseEnd: number;

  @Field((type) => Number, { nullable: true, description: '' })
  requestStart: number;

  @Field((type) => Number, { nullable: true, description: '' })
  responseStatus: number;

  @Field((type) => Number, { nullable: true, description: '' })
  secureConnectionStart: number;

  @Field((type) => Number, { nullable: true, description: '' })
  startTime: number;

  @Field((type) => Number, { nullable: true, description: '' })
  workerStart: number;
}
