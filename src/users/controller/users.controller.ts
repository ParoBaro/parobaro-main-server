import { AuthorizationGuard } from './../../guards/authorization.guard';
import { ToIntegerPipe } from './../../pipes/to-integer.pipe';
import { HttpExceptionFilter } from './../../filters/http.filter';
import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { Job } from 'src/interfaces';
import { AuthenticationGuard } from 'src/guards/auth.guard';
import { UsersRepository } from '../repository/users.repository';
// import { AppService } from './app.service';

@Controller('user')

export class UsersController {
    
constructor(private usersDB: UsersRepository ) {}

@Get('get-users')
@UseGuards(AuthenticationGuard)
async getAllJobs(): Promise<any[]> {
  console.log('Getting all Jobs')
  return this.usersDB.findAllJobs();    
}

// @Get("get-job/:jobId")
// async getJobByUrl(@Param("jobId")jobId: string): Promise<any>{
//   console.log("Get one job")
//   return this.usersDB.getJobById(jobId);
// }

@Get("get-user-byemail/:email")
async getUserByEmail(@Param("email")email: string): Promise<any>{
  console.log("Get user by email")
  console.log(email)
  const user = await this.usersDB.getUserByEmail(email);

  if(!user[0]){
    // throw new NotFoundException(`Jobs with email ${email} not found`)
    return null
  }

  return user;
}

@Get("get-user-byuid/:uid")
async getUserByUid(@Param("uid")uid: string): Promise<any>{
  console.log("Get user by uid")
  console.log(uid)
  const user = await this.usersDB.getUserByUid(uid);

  if(!user[0]){
    // throw new NotFoundException(`Jobs with email ${email} not found`)
    return null
  }

  return user;
}

// @Put('update-job/:jobId')
// async updateJob(
//   @Param("jobId") courseId: string, 
//   @Body() changes: Job,
//   // @Body("id", ToIntegerPipe) id: number
//   ):Promise<Job>{
//   console.log('Updating Job')
  
//   if(changes._id){
//     throw new HttpException("Can't update job id", 400)
//   }
//   return this.usersDB.updateJob(courseId, changes);
// }

// @Delete('delete-job/:jobId')
// @UseGuards(AuthorizationGuard)
// async deleteJob(@Param("jobId") courseId: string):Promise<Job>{
//   console.log('Deleting Job')
//   let job = await this.usersDB.deleteJob(courseId);
//   console.log(job)
//   if(!job){
//     throw new NotFoundException
//   } else {
//     return job;
//   }
// }

@Post('create-user')
async createJob(@Body() user): Promise<any[]>{
  console.log('Creating new user')
  console.log(user)
  return this.usersDB.createNewUser(user)
}

}
