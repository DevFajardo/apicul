import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskStatusService } from './task-status.service';
import { CreateTaskStatusDto } from './dto/create-task-status.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Controller('task-status')
export class TaskStatusController {
  constructor(private readonly taskStatusService: TaskStatusService) {}

  @Post()
  create(@Body() createTaskStatusDto: CreateTaskStatusDto) {
    return this.taskStatusService.create(createTaskStatusDto);
  }

  @Get()
  findAll() {
    return this.taskStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskStatusDto: UpdateTaskStatusDto) {
    return this.taskStatusService.update(+id, updateTaskStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskStatusService.remove(+id);
  }
}
