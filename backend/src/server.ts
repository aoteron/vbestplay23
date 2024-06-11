import express from 'express';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
// app.use('/games', gamesRoutes)
// app.use('/categories, categoriesRoutes)
// app.use('/comments', commentsRoutes)

export default app;
