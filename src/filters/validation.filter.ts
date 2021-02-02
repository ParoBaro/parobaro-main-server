import { ValidationException } from './validation.exception';
import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter {
    
    catch(exception: ValidationException, host: ArgumentsHost) {
        const context = host.switchToHttp(), response = context.getResponse()
        return response.status(400).json({
            statusCode: 400, 
            createdBy: "ValidationFilter", 
            validationErrors: exception.validationErrors
        })
    }



}