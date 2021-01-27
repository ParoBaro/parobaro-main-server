import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(word: string): string{
    if(word){
      return `Hello ${word}`
    } else {
      return `Hello - no word`
    }
    
  }
}
