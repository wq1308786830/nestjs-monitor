import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WebPerformanceService } from './web-performance.service';
import { WebPerformance } from './entities/web-performance.entity';
import { CreateWebPerformanceInput } from './dto/create-web-performance.input';
import { UpdateWebPerformanceInput } from './dto/update-web-performance.input';

@Resolver(() => WebPerformance)
export class WebPerformanceResolver {
  constructor(private readonly webPerformanceService: WebPerformanceService) {}

  @Mutation(() => WebPerformance)
  createWebPerformance(@Args('createWebPerformanceInput') createWebPerformanceInput: CreateWebPerformanceInput) {
    return this.webPerformanceService.create(createWebPerformanceInput);
  }

  @Query(() => [WebPerformance], { name: 'webPerformances' })
  findAll() {
    return this.webPerformanceService.findAll();
  }

  @Query(() => WebPerformance, { name: 'webPerformance' })
  findOne(@Args('id') id: string) {
    return this.webPerformanceService.findOne(id);
  }

  @Mutation(() => Number)
  updateWebPerformance(@Args('updateWebPerformanceInput') updateWebPerformanceInput: UpdateWebPerformanceInput): Promise<number> {
    return this.webPerformanceService.update(updateWebPerformanceInput);
  }

  @Mutation(() => Number)
  removeWebPerformance(@Args('id') id: string): Promise<number> {
    return this.webPerformanceService.remove(id);
  }
}
