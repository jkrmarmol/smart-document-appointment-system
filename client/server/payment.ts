'use server';
import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

interface FetchPaymentParams {
  page: number;
  limit: number;
  search?: string | null;
}

export async function fetchPayment({ page, limit, search }: FetchPaymentParams) {
  const skip = (page - 1) * limit;

  const payment = await prisma.paymentOptions.findMany({
    where: {
      ...(search && { name: { contains: search, mode: 'insensitive' } })
    },
    orderBy: { createdAt: 'desc' },
    skip,
    take: limit
  });

  const totalPayment = await prisma.paymentOptions.count({
    where: {
      ...(search && { name: { contains: search, mode: 'insensitive' } })
    }
  });

  return {
    payment,
    totalPayment
  };
}

export async function createPayment(data: Prisma.PaymentOptionsCreateInput) {
  const nameExist = await prisma.paymentOptions.findFirst({
    where: { name: data.name }
  });
  if (nameExist) throw new Error('Payment name already exists');
  const response = await prisma.paymentOptions.create({ data });
  return response;
}
