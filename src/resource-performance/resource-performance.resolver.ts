import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ResourcePerformanceService } from './resource-performance.service';
import { ResourcePerformance } from './entities/resource-performance.entity';
import { CreateResourcePerformanceInput } from './dto/create-resource-performance.input';
import { UpdateResourcePerformanceInput } from './dto/update-resource-performance.input';

@Resolver(() => ResourcePerformance)
export class ResourcePerformanceResolver {
  constructor(
    private readonly resourcePerformanceService: ResourcePerformanceService,
  ) {}

  @Mutation(() => ResourcePerformance)
  createResourcePerformance(
    @Args('input')
    createResourcePerformanceInput: CreateResourcePerformanceInput,
  ) {
    return this.resourcePerformanceService.create(
      createResourcePerformanceInput,
    );
  }

  @Mutation(() => [ResourcePerformance])
  async createResourcePerformances(
    @Args('inputs', { type: () => [CreateResourcePerformanceInput] })
    createResourcePerformanceInputs: CreateResourcePerformanceInput[],
  ) {
    return await this.resourcePerformanceService.creates(
      createResourcePerformanceInputs,
    );
  }

  @Query(() => [ResourcePerformance], { name: 'resourcePerformances' })
  findAll() {
    return this.resourcePerformanceService.findAll();
  }

  @Query(() => ResourcePerformance, { name: 'resourcePerformance' })
  findOne(@Args('id') id: string) {
    return this.resourcePerformanceService.findOne(id);
  }

  @Mutation(() => Number)
  updateResourcePerformance(
    @Args('updateResourcePerformanceInput')
    updateResourcePerformanceInput: UpdateResourcePerformanceInput,
  ) {
    return this.resourcePerformanceService.update(
      updateResourcePerformanceInput,
    );
  }

  @Mutation(() => Number)
  removeResourcePerformance(@Args('id') id: string) {
    return this.resourcePerformanceService.remove(id);
  }
}
