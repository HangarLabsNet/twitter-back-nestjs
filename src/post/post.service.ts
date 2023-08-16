import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {

  async findAll() {
    return [
      {
        id: 1,
        title: 'Post 1',
        content: 'Content 1',
      },
      {
        id: 2,
        title: 'Post 2',
        content: 'Content 2',
      },
    ];
  }
  
}
