import { UsersRepository } from './repository/users.repository';
import { UsersController } from './controller/users.controller';
import { UsersSchema } from './schemas/users.schema';
import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';

@Module({
    imports:[MongooseModule.forFeature([
        {
            name: "User", schema: UsersSchema
        }
    ])],
    controllers: [UsersController],
    providers: [UsersRepository]
})

export class UsersModule{}