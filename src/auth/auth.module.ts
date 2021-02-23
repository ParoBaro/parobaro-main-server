import { UsersSchema } from './users.schema';
import { AuthController } from './auth.controller';
import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: "User", schema: UsersSchema
            }
        ])
    ],
    controllers: [AuthController]
})
export class AuthModule{

}
