import { ToIntegerPipe } from './../../pipes/to-integer.pipe';
import { HttpExceptionFilter } from './../../filters/http.filter';
import { JobsRepository } from './../repositories/jobs.repository';
import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, Post, Put, UseFilters } from '@nestjs/common';
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

@Get("get-job/:jobId")
async getJobByUrl(@Param("jobId")jobId: string): Promise<any>{
  console.log("Get one job")
  return this.jobsDB.getJobById(jobId);
}

@Get("get-job-bycategory/:category")
async getJobByCategory(@Param("category")category: string): Promise<any>{
  console.log("Get jobs by category")
  const jobs = await this.jobsDB.getJobByCategory(category);

  if(!jobs.length){
    throw new NotFoundException(`Jobs with category ${category} not found`)
  } 
  return jobs;
}

@Put('update-job/:jobId')
async updateJob(
  @Param("jobId") courseId: string, 
  @Body() changes: Job,
  // @Body("id", ToIntegerPipe) id: number
  ):Promise<Job>{
  console.log('Updating Job')
  
  if(changes._id){
    throw new HttpException("Can't update job id", 400)
  }
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
