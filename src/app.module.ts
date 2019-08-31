import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CoverModule } from './cover/cover.module';
import {VideoModule} from './video/video.module';
import {CgiModule} from './cgi/cgi.module';

// code first
@Module({
  imports: [
    CoverModule,
    VideoModule,
    CgiModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }