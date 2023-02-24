import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourcePerformanceService } from './resource-performance.service';
import { ResourcePerformanceResolver } from './resource-performance.resolver';
import { ResourcePerformance } from './entities/resource-performance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResourcePerformance])],
  providers: [ResourcePerformanceResolver, ResourcePerformanceService],
})
export class ResourcePerformanceModule {}
