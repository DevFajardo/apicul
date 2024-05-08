import { Task } from "src/tasks/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TaskCategory {

    @PrimaryGeneratedColumn()
    id : number

    @Column({
        unique : true
    })
    description : string

    @Column()
    color : string

    //se vincula la relacion uno a muchos con la entidad task
    @OneToMany(()=> Task, (task)=> task.taskCategory )
    tasks : Task[]

}
