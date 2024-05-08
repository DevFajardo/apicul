import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskStatus {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    description : string

    @OneToMany(()=> Task, (task)=> task.taskStatus )
    tasks : Task[]
}
