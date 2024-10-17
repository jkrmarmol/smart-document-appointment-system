'use server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createDocument(data: Prisma.DocumentsCreateInput) {
  const nameExist = await prisma.documents.findFirst({
    where: { name: data.name }
  });
  if (nameExist) throw new Error('Document name already exists');
  const response = await prisma.documents.create({ data });
  return response;
}
