import express from 'express';
import User from '../models/User.mjs';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).send('User registered');
});

export default router;
