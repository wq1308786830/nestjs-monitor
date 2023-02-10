import { Module } from '@nestjs/common';
import { ResourcePerformanceService } from './resource-performance.service';
import { ResourcePerformanceResolver } from './resource-performance.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ResourcePerformance, ResourcePerformanceSchema } from './entities/resource-performance.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: ResourcePerformance.name, schema: ResourcePerformanceSchema }])],
  providers: [ResourcePerformanceResolver, ResourcePerformanceService]
})
export class ResourcePerformanceModule {}
