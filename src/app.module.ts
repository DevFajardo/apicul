import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';
import { DataSource } from 'typeorm';
import { TaskStatusModule } from './task-status/task-status.module';
import { TaskCategoriesModule } from './task-categories/task-categories.module';
import { TaskStatus } from './task-status/entities/task-status.entity';
import { TaskCategory } from './task-categories/entities/task-category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'apicul',
      entities: [User, Task, TaskStatus, TaskCategory],
      synchronize: true,
    }),
    UserModule,
    TasksModule,
    TaskStatusModule,
    TaskCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

