'use server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createDocument(data: Prisma.DocumentsCreateInput) {
  const response = await prisma.documents.create({ data });
  return response;
}
