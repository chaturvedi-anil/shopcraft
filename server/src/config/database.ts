import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  log: ["query", "info", "error"],
});

export async function checkDatabaseConnection() {
  try {
    await prismaClient.$connect();
    console.info(`[INFO] : Database connected successfully`);
  } catch (error) {
    console.error(`[ERROR] : Database connection falied `, error);
  }
}
