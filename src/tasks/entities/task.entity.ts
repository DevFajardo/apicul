
import { TaskCategory } from "src/task-categories/entities/task-category.entity";
import { TaskStatus } from "src/task-status/entities/task-status.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    //se crea la columna de la llave foranea y luego se le aplica el decorador @ManyToOne
    @Column()
    taskCategoryId : number
    @ManyToOne(() => TaskCategory, category => category.tasks)
    taskCategory: TaskCategory;

    @Column()
    taskStatusId : number
    @ManyToOne(() => TaskStatus, (taskStatus) => taskStatus.tasks)
    taskStatus: TaskStatus;

    @Column()
    userId : number
    @ManyToOne(() => User, (user) => user.task)
    user: User;

    @Column()
    description: string

    @Column()
    color: string

}
