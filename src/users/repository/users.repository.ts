// import { Job } from './../../interfaces';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/interfaces";
import * as moment from 'moment'

@Injectable()
export class UsersRepository{

    constructor(@InjectModel('User') private usersModel: Model<any>){}

    async findAllJobs(): Promise<any[]>{
        return this.usersModel.find();
    }

    // async getJobById(jobId: string): Promise<any>{
    //     return this.usersModel.findById(jobId)
    // }

    async getUserByEmail(email: string): Promise<any[]>{
        return this.usersModel.find({email: email})
    }

    async getUserByUid(uid: string): Promise<any[]>{
        return this.usersModel.find({uid: uid})
    }

    // async updateJob(courseId: string, changes: Partial<Job>):Promise<Job>{
    //     return this.usersModel.findOneAndUpdate({_id: courseId}, changes, {new: true})
    // }

    // async deleteJob(courseId: string):Promise<Job>{
    //     return this.usersModel.findOneAndDelete({_id: courseId})
    // }

    async createNewUser(user: User): Promise<any[]>{
        const newUser = new this.usersModel(user)
        newUser.joinedApp = moment().format('LLLL');
        await newUser.save();
        return newUser
    }
}