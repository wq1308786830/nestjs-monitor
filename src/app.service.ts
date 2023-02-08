import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cats/models/cat.model';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Cat)
    private usersRepository: Repository<Cat>,
  ) {}

  getHello(): Promise<Cat[]> {
    return this.usersRepository.find();
  }
}
