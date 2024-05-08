import { Injectable } from '@nestjs/common';
import { CreateTaskCategoryDto } from './dto/create-task-category.dto';
import { UpdateTaskCategoryDto } from './dto/update-task-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskCategory } from './entities/task-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskCategoriesService {
  
  constructor(@InjectRepository(TaskCategory) private TaskCategoryRepository: Repository<TaskCategory>
  ) { }
  create(createTaskCategoryDto: CreateTaskCategoryDto) {
    return this.TaskCategoryRepository.save(createTaskCategoryDto);
  }

  findAll() {
    return this.TaskCategoryRepository.find();
  }

  findOne(id: number) {
    return this.TaskCategoryRepository.findOneBy({ id });
  }

  update(id: number, updateTaskCategoryDto: UpdateTaskCategoryDto) {
    try {
      this.TaskCategoryRepository.update(id, updateTaskCategoryDto);
      return {
        message: "se actualizo correctamente",
        update: updateTaskCategoryDto
      }
    } catch (error) {
      return { error }
    }
  }

  remove(id: number) {
    
    this.TaskCategoryRepository.delete(id);
    return {
      message : "eliminado correctamente",
    }
  }
}
