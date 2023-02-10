import { CreateWebPerformanceInput } from './create-web-performance.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWebPerformanceInput extends PartialType(CreateWebPerformanceInput) {
  @Field()
  id: string;
}
