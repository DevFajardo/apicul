import { Module } from '@nestjs/common';
import { TaskStatusService } from './task-status.service';
import { TaskStatusController } from './task-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskStatus])],
  controllers: [TaskStatusController],
  providers: [TaskStatusService],
})
export class TaskStatusModule {}
