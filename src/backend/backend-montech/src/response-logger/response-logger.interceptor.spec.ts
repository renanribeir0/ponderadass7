import { ResponseLoggerInterceptor } from './response-logger.interceptor';

describe('ResponseLoggerInterceptor', () => {
  it('should be defined', () => {
    expect(new ResponseLoggerInterceptor()).toBeDefined();
  });
});
