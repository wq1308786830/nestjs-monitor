import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResourcePerformanceInput } from './dto/create-resource-performance.input';
import { UpdateResourcePerformanceInput } from './dto/update-resource-performance.input';
import { ResourcePerformance } from './entities/resource-performance.entity';

@Injectable()
export class ResourcePerformanceService {
  constructor(
    @InjectRepository(ResourcePerformance)
    private resourcePerformanceRepository: Repository<ResourcePerformance>,
  ) {}

  create(createResourcePerformanceInput: CreateResourcePerformanceInput) {
    return this.resourcePerformanceRepository.save(
      createResourcePerformanceInput,
    );
  }

  async creates(
    createResourcePerformanceInputs: CreateResourcePerformanceInput[],
  ) {
    const resp = await this.resourcePerformanceRepository.save(
      createResourcePerformanceInputs,
    );
    return resp;
  }

  findAll() {
    return this.resourcePerformanceRepository.find();
  }

  findOne(id: number) {
    return this.resourcePerformanceRepository.findOneBy({ id });
  }

  async update(updateResourcePerformanceInput: UpdateResourcePerformanceInput) {
    const resp = await this.resourcePerformanceRepository.update(
      updateResourcePerformanceInput.id,
      updateResourcePerformanceInput,
    );
    return resp.affected;
  }

  async remove(id: number) {
    const resp = await this.resourcePerformanceRepository.delete({ id });
    return resp.affected;
  }
}
