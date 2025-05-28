import { Module } from '@nestjs/common';
import { AuthLoggerService } from './auth-logger.service';

@Module({
  providers: [AuthLoggerService],
  exports: [AuthLoggerService],
})
export class AuthLoggerModule {}
