import { JobsController } from './jobs/controllers/jobs.controller';
import { GetUserMiddleware } from './middleware/get-user.middleware';
import { AuthModule } from './auth/auth.module';
import { JobsModule } from './jobs/jobs.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { MONGODB_URI } from './connection.temporary';

@Module({
  imports: [JobsModule, AuthModule, MongooseModule.forRoot(MONGODB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GetUserMiddleware)
    .forRoutes(JobsController)
  }
}
