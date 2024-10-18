'use server';
import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

interface FetchDocumentsParams {
  page: number;
  limit: number;
  search?: string | null;
}

export async function fetchDocuments({ page, limit, search }: FetchDocumentsParams) {
  const skip = (page - 1) * limit;

  const documents = await prisma.documents.findMany({
    where: {
      ...(search && { name: { contains: search, mode: 'insensitive' } })
    },
    orderBy: { createdAt: 'desc' },
    skip,
    take: limit
  });

  const totalDocuments = await prisma.documents.count({
    where: {
      ...(search && { name: { contains: search, mode: 'insensitive' } })
    }
  });

  return {
    documents: documents.map((doc) => ({
      ...doc,
      price: Number(doc.price)
    })),
    totalDocuments
  };
}

export async function createDocument(data: Prisma.DocumentsCreateInput) {
  const nameExist = await prisma.documents.findFirst({
    where: { name: data.name }
  });
  if (nameExist) throw new Error('Document name already exists');
  const response = await prisma.documents.create({ data });
  return response;
}

export async function fetchDocumentById(documentId: string) {
  const checkDocumentExist = await prisma.documents.findFirst({
    where: { id: documentId }
  });
  if (!checkDocumentExist) throw new Error('Document not found');
  const document = await prisma.documents.findFirst({
    where: { id: documentId }
  });
  return document;
}

export async function updateDocument(documentId: string, data: Prisma.DocumentsUpdateInput) {
  const checkDocumentExist = await prisma.documents.findFirst({
    where: { id: documentId }
  });
  if (!checkDocumentExist) throw new Error('Document not found');
  const response = await prisma.documents.update({
    where: { id: documentId },
    data
  });
  return response;
}

export async function deleteDocument(documentId: string) {
  const checkDocumentExist = await prisma.documents.findFirst({
    where: { id: documentId }
  });
  if (!checkDocumentExist) throw new Error('Document not found');
  const response = await prisma.documents.delete({
    where: { id: documentId }
  });
  return response;
}
