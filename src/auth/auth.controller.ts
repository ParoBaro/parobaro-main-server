import { JWT_SECRET } from './../connection.temporary';
import { Model } from 'mongoose';
import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as password from 'password-hash-and-salt'
import * as jwt from 'jsonwebtoken'

@Controller("login")
export class AuthController {
 
    constructor(@InjectModel("User") private userModel: Model<any>){}
    
    @Post("phone")
    async login(@Body("phone") phone: string, @Body("password") plainTextPassword: string){
        const user =  await this.userModel.findOne({phone})

        if(!user){
            console.log('not user')
            throw new UnauthorizedException;
        } 

        return new Promise((res, rej) =>{

            password(plainTextPassword).verifyAgainst(
                user.passwordHash,
                (err, verified) => {

                    // console.log('///')
                    // console.log(verified)
                    // console.log(err)

                    // if(!verified){
                    //     console.log('1')
                    //     rej(new UnauthorizedException);
                    // }

                    const token = jwt.sign({phone, roles: user.roles}, JWT_SECRET)
                    console.log('2')
                    res({token})
                }
            )
        });

       
    }
    
    
}