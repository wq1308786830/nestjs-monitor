import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResourcePerformanceInput } from './dto/create-resource-performance.input';
import { UpdateResourcePerformanceInput } from './dto/update-resource-performance.input';
import {
  ResourcePerformance,
  ResourcePerformanceDocument,
} from './entities/resource-performance.entity';

@Injectable()
export class ResourcePerformanceService {
  constructor(
    @InjectModel(ResourcePerformance.name)
    private readonly resourcePerformanceModel: Model<ResourcePerformanceDocument>,
  ) {}

  create(createResourcePerformanceInput: CreateResourcePerformanceInput) {
    return this.resourcePerformanceModel.create(createResourcePerformanceInput);
  }

  async creates(
    createResourcePerformanceInputs: CreateResourcePerformanceInput[],
  ) {
    const resp = await this.resourcePerformanceModel.insertMany(
      createResourcePerformanceInputs,
    );
    return resp;
  }

  findAll() {
    return this.resourcePerformanceModel.find();
  }

  findOne(id: string) {
    return this.resourcePerformanceModel.findOne({ id });
  }

  async update(updateResourcePerformanceInput: UpdateResourcePerformanceInput) {
    const resp = await this.resourcePerformanceModel.updateOne(
      updateResourcePerformanceInput,
    );
    return resp.modifiedCount;
  }

  async remove(id: string) {
    const resp = await this.resourcePerformanceModel.deleteOne({ id });
    return resp.deletedCount;
  }
}
