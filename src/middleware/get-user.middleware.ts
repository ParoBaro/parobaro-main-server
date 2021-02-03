import { Injectable, NestMiddleware } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from "src/connection.temporary";

@Injectable()
export class GetUserMiddleware implements NestMiddleware {
    
    use(req: Request, res: Response, next: () => void) {
        const authJwtToken = req.headers['authorization'];

        if(!authJwtToken){
            next();
            return;
        }

        try {
            const user = jwt.verify(authJwtToken, JWT_SECRET);
            if(user){
                console.log(`User logged ${JSON.stringify(user)}`)
                req["user"] = user;
            }
        } catch (error) {
            console.log(`Error ${error}`)
        }

        next();
   }

}