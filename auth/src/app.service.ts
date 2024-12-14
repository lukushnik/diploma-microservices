import { BadRequestException, Injectable } from '@nestjs/common';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
@Injectable()
export class AppService {
  getHello() {
    const a = getRandomInt(100);

    if (a > 50) {
      throw new Error('Error getting hello ');
    } else if (a < 30) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Some error description',
      });
    } else {
      return `Hello ${a}`;
    }
  }
}
