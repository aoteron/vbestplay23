import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send('Error al crear el usuario: ' + error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find().select('-password');
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send('Error al obtener los usuarios ' + error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id).select('-password');
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json('Error al obtener el usuario ' + error);
  }
};
