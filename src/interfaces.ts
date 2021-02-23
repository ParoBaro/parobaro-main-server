import { IsInt, IsString } from "class-validator";
export class Job {
    _id: any;
    name: string;
    @IsString({message: "Must be a string"}) description: string;
    @IsString({message: "Must be a string"}) uid: string;
    @IsInt({message: "Must be an int"}) id: number;
    @IsInt({message: "Must be an int"}) testing: number;
}

export class User {
    _id?: string;
    displayName: string;
    lastname?: string;
    email: string;
    phoneNumber?: string;
    uid: string;
    birthDate?: string;
    sex?: string;
    isVerified?: boolean;
    lastSignIn: string;
    joinedApp: string;

    payment?:{
        hashCard: string;
        hashVigency: string;
        hashName: string;
    }

    documents?:{
        first: string;
    }

    calification?:{
        score: number;
        reviews: Reviews[]

    }

    jobs?: Job[]
}

export class Reviews{
    _id: string;
    uid: string;
    score: number;
    comment: string;
}