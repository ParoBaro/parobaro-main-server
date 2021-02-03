import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationGuard implements CanActivate{
    
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        
        const host = context.switchToHttp(),
            request = host.getRequest();

        const user = request['user'];
        
        if(!user){
            console.log('Unauthorized from Guard')    
            throw new UnauthorizedException();
        }

        console.log('User is auth')
        return true;
        
    }

}