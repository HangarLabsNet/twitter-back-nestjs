import { Body, Controller, Get, Param, Post, Request, Logger } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, ReadPostDto } from './post.dto';
import { PageDto } from 'src/base/base.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags("posts")
@ApiBearerAuth()
export class PostController {
  private readonly logger = new Logger(PostController.name)
  
  constructor(private postService: PostService) {}

  @Get()
  async findAll(): Promise<PageDto<ReadPostDto>> {
    return await this.postService.findAll();
  }

  @Post()
  async create(@Body() data: CreatePostDto, @Request() request): Promise<ReadPostDto> {
    this.logger.debug({ user: request.user, data })
    return await this.postService.create({ user_id: request.user.userId, ...data });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ReadPostDto> {
    return await this.postService.findFirst({ id });
  }
}
