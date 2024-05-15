import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import studentRoutes from './routes/student.routes';

const app: Application = express();

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://yelloOwl:yellowowl@cluster0.m44ruju.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(express.json());
app.use('/api/students', studentRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

export default app;