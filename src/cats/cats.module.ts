import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { Cat, CatSchema } from './cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsResolver, CatsService]
})
export class CatsModule {}
