
import { Injectable, HttpService } from '@nestjs/common';
import { Cover } from './models/cover';
import {Video} from '../video/models/video';

@Injectable()
export class CoverService {
    constructor(private readonly httpService: HttpService) { }

    async findOneById(id: string): Promise<Cover> {
        const url: any = `http://nodecgi.media.cm.com/union_cover?ids=${id}&fields=title,video_ids,cover_id`;
        const result = await this.httpService.get(url).toPromise()
        const data = result.data.data;
        if (data.length > 0 && data[0].retcode == 0) {
            const { jsonData, id } = data[0];
            jsonData.cid = id;
            return jsonData;
        } else {
            return {} as Cover;
        }
    }

    async findAll(title: string): Promise<Cover[]> {
        return [] as Cover[];
    }

    async unionVideo(vid :String) : Promise<Video[]>{
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
