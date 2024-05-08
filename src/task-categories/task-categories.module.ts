import { Module } from '@nestjs/common';
import { TaskCategoriesService } from './task-categories.service';
import { TaskCategoriesController } from './task-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskCategory } from './entities/task-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskCategory])],
  controllers: [TaskCategoriesController],
  providers: [TaskCategoriesService],
})
export class TaskCategoriesModule {}
