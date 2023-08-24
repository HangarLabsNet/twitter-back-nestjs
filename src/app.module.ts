import { Module } from '@nestjs/common';
import { loggerModule } from './logging';
import { ObjectionModule } from './objection/objection.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    loggerModule,
    ObjectionModule,
    UserModule,
    AuthModule,
    PostModule,
  ],
  providers: []
})
export class AppModule {}
