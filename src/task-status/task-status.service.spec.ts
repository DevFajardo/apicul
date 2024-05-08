import { Test, TestingModule } from '@nestjs/testing';
import { TaskStatusService } from './task-status.service';

describe('TaskStatusService', () => {
  let service: TaskStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskStatusService],
    }).compile();

    service = module.get<TaskStatusService>(TaskStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
