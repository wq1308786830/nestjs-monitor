import { CreateResourcePerformanceInput } from './create-resource-performance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResourcePerformanceInput extends PartialType(CreateResourcePerformanceInput) {
  @Field()
  id: string;
}
