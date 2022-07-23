import { Injectable } from '@nestjs/common';
import { AppDto } from './dto/app.dto';

@Injectable()
export class AppService {
  add(body: AppDto): number {
    return body.first + body.second;
    // return parseInt(body.a) + parseInt(body.b);
  }
}
