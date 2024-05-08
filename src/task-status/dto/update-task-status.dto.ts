import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskStatusDto } from './create-task-status.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskStatusDto extends PartialType(CreateTaskStatusDto) {

}
