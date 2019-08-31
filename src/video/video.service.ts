
import { Injectable, HttpServer, HttpService } from '@nestjs/common';
import { Video } from './models/video';

@Injectable()
export class VideoService {
    constructor(private readonly httpService: HttpService) { }

    async unionVideo(vid: String): Promise<Video[]> {
        const url: any = `http://nodecgi.media.cm.com/union_video?ids=${vid}&fields=title,type,second_title,state`;
        const result = await this.httpService.get(url).toPromise()
        const data = result.data.data;
        if (data.length > 0 && data[0].retcode == 0) {
            return data.map(element => {
                return {
                    ...element.jsonData,
                    vid: element.id
                }
            });
        } else {
            return [] as Video[];
        }
    }
}
