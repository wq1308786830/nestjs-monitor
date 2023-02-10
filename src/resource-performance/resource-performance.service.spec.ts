import { Test, TestingModule } from '@nestjs/testing';
import { ResourcePerformanceService } from './resource-performance.service';

describe('ResourcePerformanceService', () => {
  let service: ResourcePerformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourcePerformanceService],
    }).compile();

    service = module.get<ResourcePerformanceService>(ResourcePerformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
