import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Video {
  @Field(type => ID)
  vid: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  second_title?: string;

  @Field()
  type: string;

  @Field()
  state: number;
}