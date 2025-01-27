import {
  createUser,
  getUserByEmail,
  updateUser,
  deleteUser,
} from "@/models/userModel";

export const registerUser = async (
  email: string,
  password: string,
  name?: string
) => {
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use");
  }
  return createUser(email, password, name);
};

export const modifyUser = async (
  userId: number,
  data: { email?: string; password?: string; name?: string }
) => {
  const user = await updateUser(userId, data);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const removeUser = async (userId: number) => {
  const user = await deleteUser(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
