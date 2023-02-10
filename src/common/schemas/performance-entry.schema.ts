import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type PerformanceEntryDocument = HydratedDocument<PerformanceEntry>;

@Schema()
@ObjectType({ description: 'performanceEntry ' })
export class PerformanceEntry {
  @Prop()
  @Field({ nullable: true, description: 'entry的名称' })
  name: string;

  @Prop()
  @Field({ nullable: true, description: 'entry的类型' })
  entryType: string;

  @Prop()
  @Field(type => Number, { nullable: true, description: 'entry开始的时间' })
  startTime: number;
  
  @Prop()
  @Field(type => Number, { nullable: true, description: 'entry持续的时间' })
  duration: number;
}

export const PerformanceEntrySchema = SchemaFactory.createForClass(PerformanceEntry);