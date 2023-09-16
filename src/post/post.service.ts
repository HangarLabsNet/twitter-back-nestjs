import { Injectable } from '@nestjs/common';
import { ReadPostDto } from './post.dto';
import { PostModel } from './post.model';
import { ModelService } from '../base/base.service';

@Injectable()
export class PostService extends ModelService<ReadPostDto> {
  constructor() { super(PostModel) }
}
