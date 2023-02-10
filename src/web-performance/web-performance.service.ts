import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWebPerformanceInput } from './dto/create-web-performance.input';
import { UpdateWebPerformanceInput } from './dto/update-web-performance.input';
import { WebPerformance, WebPerformanceDocument } from './entities/web-performance.entity';

@Injectable()
export class WebPerformanceService {
  constructor(
    @InjectModel(WebPerformance.name) private readonly webPerformanceModel: Model<WebPerformanceDocument>
    ) {}

  create(createWebPerformanceInput: CreateWebPerformanceInput) {
    return this.webPerformanceModel.create<WebPerformance>({ ...createWebPerformanceInput, time: Date.now() } as WebPerformance);
  }

  findAll() {
    return this.webPerformanceModel.find();
  }

  findOne(id: string) {
    return this.webPerformanceModel.findOne({ id });
  }

  async update(updateWebPerformanceInput: UpdateWebPerformanceInput) {
    const resp = await this.webPerformanceModel.updateOne(updateWebPerformanceInput);
    return resp.modifiedCount;
  }

  async remove(id: string) {
    const resp = await this.webPerformanceModel.deleteOne({ id });
    return resp.deletedCount
  }
}
