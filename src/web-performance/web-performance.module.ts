import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebPerformanceService } from './web-performance.service';
import { WebPerformanceResolver } from './web-performance.resolver';
import { WebPerformance, WebPerformanceSchema } from './entities/web-performance.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: WebPerformance.name, schema: WebPerformanceSchema }])],
  providers: [WebPerformanceResolver, WebPerformanceService]
})
export class WebPerformanceModule {}
