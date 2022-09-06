import { User } from './User';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


export class Post {
    @PrimaryGeneratedColumn()
    idPost: number

    @Column({type: 'text', length:300})
    content: string

    @Column()
    created_at: Date
    
    @Column()
    updated_at: Date

    @ManyToOne(() => User, User => User)
    @JoinColumn({name:'user_id'})
    user_id: User
}