import { Injectable } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task-status.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskStatus } from './entities/task-status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskStatusService {

  constructor(@InjectRepository(TaskStatus) private TaskCategoryRepository: Repository<TaskStatus>
  ) { }

  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.TaskCategoryRepository.save(createTaskStatusDto)
  }

  findAll() {
    return this.TaskCategoryRepository.find();
  }

  findOne(id: number) {
    return this.TaskCategoryRepository.findOneBy({ id });
  }

  update(id: number, updateTaskStatusDto: UpdateTaskStatusDto) {
    try {
      this.TaskCategoryRepository.update(id, updateTaskStatusDto)
      return {
        message: "actualizado correctamente",
        update: updateTaskStatusDto
      }
    } catch (error) {
      return {
        error
      }
    }
  }

  remove(id: number) {
    try {
      this.TaskCategoryRepository.delete(id)
      return {
        message: "Eliminado correctamente",
      }
    } catch (error) {
      return {
        error
      }
    }
  }
}
