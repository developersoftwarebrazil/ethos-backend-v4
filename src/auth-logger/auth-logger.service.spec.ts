import { Test, TestingModule } from '@nestjs/testing';
import { AuthLoggerService } from './auth-logger.service';

describe('AuthLoggerService', () => {
  let service: AuthLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthLoggerService],
    }).compile();

    service = module.get<AuthLoggerService>(AuthLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
