import { User } from './User';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    idPost: number

    @Column({length:300})
    content: string

    @Column()
    @CreateDateColumn()
    created_at: Date
    
    @Column()
    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, User => User)
    @JoinColumn({name:'user_id'})
    user_id: User
}