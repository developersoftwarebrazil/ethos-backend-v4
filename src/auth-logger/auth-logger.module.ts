import { Module } from '@nestjs/common';
import { AuthLoggerService } from './auth-logger.service';

@Module({
  providers: [AuthLoggerService]
})
export class AuthLoggerModule {}
