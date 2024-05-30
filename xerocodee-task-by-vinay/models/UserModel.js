const users = [];

export const createUser = (name, email, password) => {
  const user = {
    id: Date.now().toString(),
    name,
    email,
    password, // In a real application, passwords should be hashed before storing
  };
  users.push(user);
  return user;
};

export const getUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

export const getUserById = (id) => {
  return users.find(user => user.id === id);
};