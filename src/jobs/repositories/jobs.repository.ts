import { Job } from './../../interfaces';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class JobsRepository{

    constructor(@InjectModel('Job') private jobsModel: Model<any>){}

    async findAllJobs(): Promise<any[]>{
        return this.jobsModel.find();
    }

    async updateJob(courseId: string, changes: Partial<Job>):Promise<Job>{
        return this.jobsModel.findOneAndUpdate({_id: courseId}, changes, {new: true})
    }

    async deleteJob(courseId: string):Promise<Job>{
        return this.jobsModel.findOneAndDelete({_id: courseId})
    }

    async postNewJob(job: Job): Promise<any[]>{
        const newJob = new this.jobsModel(job)
        await newJob.save();
        return newJob
    }
}