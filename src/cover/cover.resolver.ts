
import { NotFoundException } from '@nestjs/common';
import { Mutation, Query, Resolver, Subscription,Args,Root } from '@nestjs/graphql';
import { Video } from '../video/models/video';
import { Cover } from './models/cover';
import { CoverService } from './cover.service';
import { FieldResolver } from 'type-graphql';


@Resolver(of => Cover)
export class CoverResolver {
  constructor(private readonly coverService: CoverService) { }

  @Query(returns => Cover,{nullable:true})
  async getCover(@Args("cid") cid: string): Promise<Cover> {
    const cover = await this.coverService.findOneById(cid);
    return cover;
  }

  @Query(returns => [Cover])
  async getCovers(@Args("title") title: string): Promise<Cover[]> {
    return await this.coverService.findAll(title);
  }



  // @Subscription(returns => Cover)
  // recipeAdded() {
  //   return pubSub.asyncIterator('recipeAdded');
  // }
}