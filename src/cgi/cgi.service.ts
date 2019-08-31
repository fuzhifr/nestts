
import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class CgiService {
    constructor(private readonly httpService: HttpService) { };
    async sayHello(): Promise<String> {
        return 'say hello';
    }

    async fetchVideo(vid: String): Promise<any> {
        const data = await this.httpService.get(`http://vsearch.cm.com:8080/php/vsearch.php?tid=683&otype=json&appid=mediaplatform&appkey=acba0c5b0b76a91b1c7e1d2c2b257d65&1017=&1060=&1066=&1086=&1087=&1090=&1096=&1102=&1103=&1118=&1570=&2294=&2407=&2515=&2516=&op_id=1&limit=20&pnum=0&vid=${vid}`).toPromise();
        return data.data;
    }
}
