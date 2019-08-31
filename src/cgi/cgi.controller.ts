import { Controller, Get, Req, Query } from '@nestjs/common';
import { CgiService } from './cgi.service';
import { Request } from 'express';

@Controller("cgi")
export class CgiController {
    constructor(private readonly cgiService: CgiService) { }

    @Get("hello")
    async sayHello(): Promise<String> {
        return await this.cgiService.sayHello();
    }

    @Get('remote')
    async fetchVideo(@Query('vid') vid: String, @Req() req: Request) {
        console.log(vid, req.cookies);
        return await this.cgiService.fetchVideo(vid);
    }
}
