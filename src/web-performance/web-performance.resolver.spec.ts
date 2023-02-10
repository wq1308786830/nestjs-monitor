import { Test, TestingModule } from '@nestjs/testing';
import { WebPerformanceResolver } from './web-performance.resolver';
import { WebPerformanceService } from './web-performance.service';

describe('WebPerformanceResolver', () => {
  let resolver: WebPerformanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebPerformanceResolver, WebPerformanceService],
    }).compile();

    resolver = module.get<WebPerformanceResolver>(WebPerformanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
