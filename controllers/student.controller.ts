import { Request, Response } from 'express';
import Student, { IStudent } from '../models/student.model';
import { FilterQuery } from 'mongoose';

export const getStudents = async (req: Request, res: Response) => {
  console.log("getStudents called with query:", req.query);
  try {
    const { search } = req.query;
    const query: FilterQuery<IStudent> = {};

    if (search) {
      const searchRegex = { $regex: search as string, $options: 'i' };
      query.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { enrollNumber: searchRegex }
      ];
    }

    console.log("Query constructed:", query);

    const students = await Student.find(query);
    console.log("Students found:", students);
    res.status(200).json(students);
  } catch (error: unknown) {
    console.error("Error fetching students:", error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const createStudent = async (req: Request, res: Response) => {
  const { name, email, phone, enrollNumber, dateOfAdmission } = req.body;
  const newStudent: IStudent = new Student({ name, email, phone, enrollNumber, dateOfAdmission });

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, phone, enrollNumber, dateOfAdmission } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, email, phone, enrollNumber, dateOfAdmission },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Student.findByIdAndDelete(id);
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
