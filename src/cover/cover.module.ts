import { Module, HttpModule } from '@nestjs/common';
import { CoverResolver } from './cover.resolver';
import { CoverService } from './cover.service';
import {VideoModule} from '../video/video.module';
import { CgiModule } from '../cgi/cgi.module';
@Module({
    imports: [HttpModule.register({}), VideoModule, CgiModule],
    providers: [CoverResolver, CoverService],
    exports: [CoverService]
})
export class CoverModule { }