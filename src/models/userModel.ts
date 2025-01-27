import prisma from "./prismaClient";

export const createUser = async (
  email: string,
  password: string,
  name?: string
) => {
  return prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const updateUser = async (
  userId: number,
  data: { email?: string; password?: string; name?: string }
) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data,
  });
};

export const deleteUser = async (userId: number) => {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  });
};
