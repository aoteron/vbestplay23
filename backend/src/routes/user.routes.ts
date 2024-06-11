import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/user.controllers';

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers); // Añadir más tarde 'protect'
userRouter.get('/:id', getUserById); // Añadir más tarde 'protect'
userRouter.put('/:id', updateUser); // Añadir más tarde 'protect'
userRouter.delete('/:id', deleteUser); // Añadir más tarde 'protect'

export default userRouter;
