import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

    
    catch(exception: HttpException, host: ArgumentsHost) {
        
        console.log("Http exception handler triggered", JSON.stringify(exception))

        const context = host.switchToHttp();
        const response = context.getResponse(), request = context.getRequest(), statusCode = exception.getStatus()
        return response.status(statusCode).json({
            status: statusCode,
            createdBy: "HttpExceptionFilter",
            errorMessage: exception.message
        });

    }

}