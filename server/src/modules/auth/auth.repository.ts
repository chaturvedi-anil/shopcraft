import { prismaClient } from "../../config/database";
import { SignupProp } from "./auth.controller";

export const findUserByEmail = (email: string) => {
  return prismaClient.user.findUnique({
    where: { email },
    select: { id: true, name: true, email: true, createdAt: true },
  });
};

export const findUserByEmailWithPassword = (email: string) => {
  return prismaClient.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });
};

export const createUser = async (data: SignupProp) => {
  return prismaClient.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
};
