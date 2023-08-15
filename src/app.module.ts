import { Module } from '@nestjs/common';
import { loggerModule } from './logging';
import { ObjectionModule } from './objection/objection.module';

@Module({
  imports: [
    loggerModule,
    ObjectionModule,
  ],
  providers: []
})
export class AppModule {}
