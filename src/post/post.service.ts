import { Injectable } from '@nestjs/common';
import { CreatePostDto, ReadPostDto } from './dto/post.dto';

@Injectable()
export class PostService {

  async findAll(): Promise<ReadPostDto[]> {
    return [
      {
        id: '1',
        content: 'Content 1',
        creationDt: '2020-01-01',
      },
      {
        id: '2',
        content: 'Content 2',
        creationDt: '2020-01-02',
      },
    ];
  }

  async create(data: CreatePostDto): Promise<ReadPostDto> {
    const strDate = new Date().toISOString();
    return {
      id: strDate,
      creationDt: strDate,
      ...data,
    }
  }

  async findOne({ id }: { id: string }): Promise<ReadPostDto> {
    return {
      id,
      content: `Content ${id}`,
      creationDt: '2020-01-01',
    };
  }
}
