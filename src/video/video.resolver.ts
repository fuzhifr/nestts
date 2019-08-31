
import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Video } from './models/video';
import { VideoService } from './video.service';

const pubSub = new PubSub();

@Resolver(of => Video)
export class VideoResolver {
  constructor(private readonly videoService: VideoService) { }
  @Query(returns => Video)
  async unionVideo(@Args('vid') vid: string): Promise<Video[]> {
    return await this.videoService.unionVideo(vid);
  }
}