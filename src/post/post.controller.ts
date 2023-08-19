import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, ReadPostDto } from './dto/post.dto';
import { PageDto } from 'src/common.dto';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async findAll(): Promise<PageDto<ReadPostDto>> {
    return await this.postService.findAll();
  }

  @Post()
  async create(@Body() post: CreatePostDto): Promise<ReadPostDto> {
    return await this.postService.create(post);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ReadPostDto> {
    return await this.postService.findOne({ id });
  }
}
