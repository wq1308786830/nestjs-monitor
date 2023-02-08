import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat ' })
export class Cat {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => Int)
  age: number;

  @Field({ nullable: true })
  breed?: string;
}