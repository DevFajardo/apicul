import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskCategoryDto } from './create-task-category.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskCategoryDto extends PartialType(CreateTaskCategoryDto) {



}
