// controllers/UserController.js

import { createUser, getUserByEmail, getUserById } from '../models/UserModel';

export const registerUser = (name, email, password) => {
  // Validate input (e.g., check for existing email, validate password strength, etc.)
  
  // Create user
  return createUser(name, email, password);
};

export const loginUser = (email, password) => {
  // Validate credentials
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    return user;
  } else {
    throw new Error('Invalid credentials');
  }
};

export const getUserProfile = (userId) => {
  // Fetch user profile data
  return getUserById(userId);
};
