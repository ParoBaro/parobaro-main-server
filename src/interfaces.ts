import { IsInt, IsString } from "class-validator";
export class Job {
    _id: any;
    name: string;
    @IsString({message: "Must be a string"}) description: string;
    @IsString({message: "Must be a string"}) uid: string;
    @IsInt({message: "Must be an int"}) id: number;
    @IsInt({message: "Must be an int"}) testing: number;
}