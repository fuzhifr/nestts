import { Field, ID, ObjectType, Arg, Root } from 'type-graphql';
import { Video } from '../../video/models/video';
@ObjectType()
export class Cover {
  @Field(type => ID)
  cid: string;

  @Field()
  title: string;

  @Field(type => [String], { nullable: true })
  video_ids: string[];

  @Field(type => [Video])
  async videos(@Root() cover: Cover) {

    return cover.video_ids.map((ele, index) => {
      return {
        vid: ele,
        title: "测试标题" + index,
        second_title: "测试次标题" + index
      }
    })
  }
}