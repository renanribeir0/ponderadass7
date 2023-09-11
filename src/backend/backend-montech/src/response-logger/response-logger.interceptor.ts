import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponseLoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();

    return next
      .handle()
      .pipe(
        tap(() => {
          const statusCode = response.statusCode;
          console.log(`Response Status: ${statusCode} ${response.statusMessage}`);
        }),
      );
  }
}
