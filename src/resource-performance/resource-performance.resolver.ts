import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ResourcePerformanceService } from './resource-performance.service';
import { ResourcePerformance } from './entities/resource-performance.entity';
import { CreateResourcePerformanceInput } from './dto/create-resource-performance.input';
import { UpdateResourcePerformanceInput } from './dto/update-resource-performance.input';
import { UseGuards } from '@nestjs/common';
import { ReportAuthGuard, ReportRolesGuard } from 'src/common/guards';
import { Roles } from 'src/common/ decorators';
import { Role } from 'src/common/enums/role.enum';

@Resolver(() => ResourcePerformance)
@Roles(Role.Reporter)
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

  /**
   * 批量插入输入数据并返回插入结果
   * @param ctx 请求上下文
   * @param createResourcePerformanceInputs 输入数据
   * @returns 插入结果
   */
  @Roles(Role.Reporter)
  @UseGuards(ReportAuthGuard, ReportRolesGuard)
  @Mutation(() => [ResourcePerformance])
  async createResourcePerformances(
    @Context() ctx,
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
