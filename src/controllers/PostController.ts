import { postRepository } from '../Repositories/postRepository';
import { Request, Response } from 'express';
import { Post } from '../entities/Post';

export class PostController {
    static create = async (req: Request, res: Response) => {
        const { content } = req.body
       
        const newPost = postRepository.create({content})
        await postRepository.save(newPost);
        return res.status(201).json(newPost);
  
      };

}