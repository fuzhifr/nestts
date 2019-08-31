import { Module, HttpModule } from '@nestjs/common';
import { VideoResolver } from './video.resolver';
import { VideoService } from './video.service';
import { CoverModule } from '../cover/cover.module';
import { CgiModule } from '../cgi/cgi.module';

@Module({
    imports: [HttpModule.register({}),CgiModule],
    providers: [VideoService, VideoResolver],
    exports: [VideoService]
})
export class VideoModule { }