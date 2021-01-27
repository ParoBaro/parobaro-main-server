import { JobsModule } from './jobs/jobs.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { MONGODB_URI } from './connection.temporary';

@Module({
  imports: [JobsModule, MongooseModule.forRoot(MONGODB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
