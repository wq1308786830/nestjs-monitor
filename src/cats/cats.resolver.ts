import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
// import { Cat } from './cat.schema';
import { CatsService } from './cats.service';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
// import { CatsArgs } from './dto/cats.args';
import { Cat } from './models/cat.model';

const pubSub = new PubSub();

@Resolver(of => Cat)
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => [Cat], { name: 'cats' })
  async findAll() {
    return await this.catsService.findAll();
  }

  @Query(() => Cat, { name: 'cat' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.catsService.findOne(id);
  }

  @Mutation(() => Cat)
  async createCat(@Args('createCatInput') createCatInput: CreateCatInput): Promise<Cat> {
    const resp = await this.catsService.create(createCatInput);
    console.log('createCat123', resp);
    
    return resp;
  }

  @Mutation(() => Cat)
  updateCat(@Args('updateCatInput') updateCatInput: UpdateCatInput) {
    return this.catsService.update(updateCatInput.id, updateCatInput);
  }

  @Mutation(() => Boolean)
  removeCat(@Args('id', { type: () => String }) id: string) {
    return this.catsService.remove(id);
  }

  @Subscription(returns => Cat)
  catAdded() {
    return pubSub.asyncIterator('catAdded');
  }
}
