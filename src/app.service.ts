import { Injectable } from '@nestjs/common';
import { AppDto } from './dto/app.dto';

@Injectable()
export class AppService {
  add(body: AppDto): number {
    return body.a + body.b;
    // return parseInt(body.a) + parseInt(body.b);
  }
}
