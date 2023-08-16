import { Module } from '@nestjs/common';
import { loggerModule } from './logging';
import { ObjectionModule } from './objection/objection.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    loggerModule,
    ObjectionModule,
    PostModule,
  ],
  providers: []
})
export class AppModule {}
