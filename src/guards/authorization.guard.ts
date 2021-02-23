import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthorizationGuard implements CanActivate {
    
    constructor(){
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const host = context.switchToHttp(),
            request = host.getRequest();

        const user = request['user'];
        console.log(user)

        const allowed = this.isAllowed(user.roles)


        if(!allowed){
            console.log("Not authorized")
            throw new ForbiddenException;
        } 
        
        return true;
    
    }

    isAllowed(userRoles: string[]){
        let flag = false;
        let allowedRoles = ['admin']

        for(let role of userRoles){
            if(!flag && allowedRoles.includes(role)){
                flag = true;
            }
        }
        return flag;
    }

}