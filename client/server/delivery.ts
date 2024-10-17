'use server';
import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

interface FetchDeliveryParams {
  page: number;
  limit: number;
  search?: string | null;
}

export async function fetchDelivery({ page, limit, search }: FetchDeliveryParams) {
  const skip = (page - 1) * limit;

  const deliveryOptions = await prisma.deliveryOptions.findMany({
    where: {
      ...(search && { name: { contains: search, mode: 'insensitive' } })
    },
    orderBy: { createdAt: 'desc' },
    skip,
    take: limit
  });

  const totalDeliveryOptions = await prisma.deliveryOptions.count({
    where: {
      ...(search && { name: { contains: search, mode: 'insensitive' } })
    }
  });

  return {
    deliveryOptions,
    totalDeliveryOptions
  };
}

export async function createDelivery(data: Prisma.DeliveryOptionsCreateInput) {
  const nameExist = await prisma.deliveryOptions.findFirst({
    where: { name: data.name }
  });
  if (nameExist) throw new Error('Delivery name already exists');
  const response = await prisma.deliveryOptions.create({ data });
  return response;
}
