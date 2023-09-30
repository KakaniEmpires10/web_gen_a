import { prisma } from "./Prisma";

export const getConfig = async () => {
  const config = await prisma.konfigurasi.findFirst();

  return config;
};

export const getUsers = async () => {
  const users = await prisma.user.findMany()

  return users
}