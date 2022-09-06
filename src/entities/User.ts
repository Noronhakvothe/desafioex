import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
   password: number

   @Column()
   created_at: Date

   @Column()
   updated_at: Date

   
}