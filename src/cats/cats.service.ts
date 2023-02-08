import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { InjectRepository } from '@nestjs/typeorm';
// import { MongoRepository } from 'typeorm';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
// import { CatsArgs } from './dto/cats.args';
import { Cat, CatDocument } from './cat.schema';

@Injectable()
export class CatsService {
  // constructor(@InjectRepository(Cat) private readonly catRepository: MongoRepository<Cat>) {}
  constructor(@InjectModel(Cat.name) private readonly catRepository: Model<CatDocument>) {}

  async create(createCatInput: CreateCatInput): Promise<Cat> {
    const resp = await this.catRepository.create(createCatInput);
    console.log('create', resp);
    
    return resp
  }

  async findAll(): Promise<Cat[]> {
    const resp = await this.catRepository.find();
    return resp;
  }

  async findOne(id: string): Promise<Cat> {
    return await this.catRepository.findOne({ _id: id });
  }

  async update(id: number, updateCatInput: UpdateCatInput) {
    return `This action updates a #${id} cat`;
  }

  async remove(id: string): Promise<boolean> {
    await this.catRepository.deleteOne({ _id: id });
    return true;
  }
}
