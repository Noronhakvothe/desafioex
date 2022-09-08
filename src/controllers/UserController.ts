import { Post } from './../entities/Post';
import { BadRequestError } from './../helpers/api-error';
import { User } from "./../entities/User";
import { userRepository } from "../Repositories/userRepository";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserController {
  async create (req: Request, res: Response) {
    const { name, email, apartment, password } = req.body;


    const userExists = await userRepository.findOneBy({email})
    
    if (userExists) {
      throw new BadRequestError('email existe brow')
    }
  
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({ 
      name,
      email,
      apartment,
      password: hashPassword
    });

    await userRepository.save(newUser)
   
    const { password: _, ...user } = newUser;

    return res.status(201).json(user);
  }
 
  
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    
    const user = await userRepository.findOneBy({ email }) 
    console.log(user)
    if(!user){
      throw new BadRequestError('email or password not found')
 
    }

    const verifyPass = await bcrypt.compare(password, user.password)
    if (!verifyPass){
      console.log(user)
      throw new BadRequestError('email or password not found!')
    }
    const token = jwt.sign({
      id: user.idUser},
      process.env.JWT_PASS ?? '',{
      expiresIn: "1d",});

   const{password: _, ...userLogin} = user

   return res.json({
    user: userLogin,
    token: token,
   })
 }}
