import { JobsRepository } from './../repositories/jobs.repository';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Job } from 'src/interfaces';
// import { AppService } from './app.service';

@Controller('job')
export class JobsController {
    
constructor(private jobsDB: JobsRepository ) {}

@Get('get-jobs')
async getAllJobs(): Promise<any[]> {
  console.log('Getting all Jobs')
  return this.jobsDB.findAllJobs();    
}

@Put('update-job/:jobId')
async updateJob(@Param("jobId") courseId: string, @Body() changes: Partial<Job>):Promise<Job>{
  console.log('Updating Job')
  return this.jobsDB.updateJob(courseId, changes);
}

@Delete('delete-job/:jobId')
async deleteJob(@Param("jobId") courseId: string):Promise<Job>{
  console.log('Deleting Job')
  return this.jobsDB.deleteJob(courseId);
}

@Post('post-job')
async createJob(@Body() job): Promise<any[]>{
  console.log('Posting new Job')
  return this.jobsDB.postNewJob(job)
}

}
