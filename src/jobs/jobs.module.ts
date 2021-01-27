import { JobsController } from './controllers/jobs.controller';
import { JobsRepository } from './repositories/jobs.repository';
import { JobsSchema } from './schemas/jobs.schema';
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: "Job", schema: JobsSchema
        }
    ])],
    controllers: [JobsController],
    providers: [JobsRepository]
})

export class JobsModule{}