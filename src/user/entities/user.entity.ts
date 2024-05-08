import { Task } from 'src/tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => Task, (task) => task.user)
    task: Task[]
}