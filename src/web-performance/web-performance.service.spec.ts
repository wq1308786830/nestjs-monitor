import { Test, TestingModule } from '@nestjs/testing';
import { WebPerformanceService } from './web-performance.service';

describe('WebPerformanceService', () => {
  let service: WebPerformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebPerformanceService],
    }).compile();

    service = module.get<WebPerformanceService>(WebPerformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
