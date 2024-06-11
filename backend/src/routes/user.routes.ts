import { Router } from 'express';
import { createUser, getUserById } from '../controllers/user.controllers';

const userRouter = Router();

userRouter.post('/', createUser)
//.get(protect, admin, getUsers);
userRouter.get('/:userId', getUserById) // Añadir más tarde 'protect'
//userRouter.delete('/:userId', deleteUser);

export default userRouter;
