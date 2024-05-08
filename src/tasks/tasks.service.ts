import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private TaskRepository: Repository<Task>
) { }

create(createTaskDto : CreateTaskDto) {
  return this.TaskRepository.save(createTaskDto)
}

findAll() {
  return this.TaskRepository.find();
}

findOne(id: number) {
  return this.TaskRepository.findOneBy({ id });
}

update(id: number, updateTaskDto: UpdateTaskDto) {
  try {
    this.TaskRepository.update(id, updateTaskDto)
    return {
      message: "actualizado correctamente",
      update: updateTaskDto
    }
  } catch (error) {
    return {
      error
    }
  }
}

remove(id: number) {
  try {
    this.TaskRepository.delete(id)
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
