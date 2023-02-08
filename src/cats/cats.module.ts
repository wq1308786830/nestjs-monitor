import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
// import { Cat } from './cat.entity';
import { Cat, CatSchema } from './cat.schema';

@Module({
  // imports: [TypeOrmModule.forFeature([Cat])],
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsResolver, CatsService]
})
export class CatsModule {}
