import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';


@InputType()
export class CreateCatInput {
  @Field()
  @Length(1, 30)
  name: string;

  @Field(() => Int)
  age: number;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(200)
  breed?: string;
}
