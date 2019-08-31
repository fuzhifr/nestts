import { Module, HttpModule } from '@nestjs/common';
import { CgiService } from './cgi.service';
import { CgiController } from './cgi.controller';
import { VideoModule } from '../video/video.module';

@Module({
    imports:[HttpModule],
    exports:[CgiService],
    controllers:[CgiController],
    providers: [CgiService],
})
export class CgiModule {}