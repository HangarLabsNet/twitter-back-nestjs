import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { ReadPostDto } from './dto/post.dto';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAll(): Promise<ReadPostDto[]> {
    return await this.postService.findAll();
  }
}
