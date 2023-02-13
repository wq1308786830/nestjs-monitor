import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { Cat, CatDocument } from './cat.schema';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private readonly catRepository: Model<CatDocument>,
  ) {}

  async create(createCatInput: CreateCatInput): Promise<Cat> {
    const resp = await this.catRepository.create(createCatInput);

    return resp;
  }

  async findAll(): Promise<Cat[]> {
    const resp = await this.catRepository.find().exec();

    return resp;
  }

  async findOne(id: string): Promise<Cat> {
    return await this.catRepository.findOne({ id });
  }

  async update(updateCatInput: UpdateCatInput): Promise<boolean> {
    const resp = await this.catRepository.updateOne(updateCatInput);
    console.log(resp);

    return !!resp.modifiedCount;
  }

  async remove(id: string): Promise<boolean> {
    const resp = await this.catRepository.deleteOne({ id });

    return !!resp.deletedCount;
  }
}
