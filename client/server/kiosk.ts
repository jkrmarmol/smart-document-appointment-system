'use server';
import { prisma } from './prisma';

export async function fetchStudentNumber(studentNo: string) {
  const studentNumber = await prisma.userInformation.findFirst({
    where: {
      studentNo: {
        equals: studentNo,
        mode: 'insensitive'
      }
    }
  });
  return studentNumber;
}

export async function fetchAllDocuments() {
  return await prisma.documents.findMany({
    where: {
      isAvailable: true
    }
  });
}

export async function fetchAllDeliveryMethods() {
  return await prisma.deliveryOptions.findMany({
    where: {
      isAvailable: true
    }
  });
}

export async function fetchAllPaymentMethods() {
  return await prisma.paymentOptions.findMany({
    where: {
      isAvailable: true
    }
  });
}

export async function fetchOrderDocument() {}
