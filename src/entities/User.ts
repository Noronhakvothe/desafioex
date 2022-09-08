import { Post } from './Post';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import bcrypt from "bcrypt" 


@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
   idUser: number

   @Column({length:70})
   name: string

   @Column({length:70})
   email:string

   @Column()
   apartment: number

   @Column()
   password: string

   @Column()
   @CreateDateColumn()
   created_at: Date

   @Column()
   @UpdateDateColumn()
   updated_at: Date

   @OneToMany(() => Post, post => post)
   Post: Post[]
    static idUser: any;
}