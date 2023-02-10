import { Test, TestingModule } from '@nestjs/testing';
import { ResourcePerformanceResolver } from './resource-performance.resolver';
import { ResourcePerformanceService } from './resource-performance.service';

describe('ResourcePerformanceResolver', () => {
  let resolver: ResourcePerformanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcePerformanceResolver, ResourcePerformanceService],
    }).compile();

    resolver = module.get<ResourcePerformanceResolver>(ResourcePerformanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
