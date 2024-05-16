import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.routes';

const app: Application = express();

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://yelloOwl:yellowowl@cluster0.m44ruju.mongodb.net/')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(express.json());
app.use(cors());
app.use('/api/students', studentRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
