import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
@ObjectType({ description: 'cat ' })
export class Cat {
  // @Prop() // Mongoose assigns each of your schemas an id virtual getter by default which returns the document's _id field
  @Field(type => ID, { nullable: true })
  id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field(type => Int)
  age: number;

  @Prop()
  @Field({ nullable: true })
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);