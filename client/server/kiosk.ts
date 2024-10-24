'use server';
import { IOrderDocument } from '@/types';
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

export async function fetchOrderDocument(data: IOrderDocument) {
  try {
    const findUser = await prisma.userInformation.findFirst({
      where: {
        studentNo: {
          equals: data.studentNo,
          mode: 'insensitive'
        }
      }
    });
    if (!findUser) throw new Error('User not found');
    const orderDocument = data.documentSelected.map((document) => ({ documentId: document, userId: findUser?.userId }));
    const documentPayment = await prisma.documentPayment.create({
      data: {
        paymentOptionsId: data.paymentOptionsId
      }
    });
    const createdRequest = await prisma.requestDocuments.create({
      data: {
        selectedSchedule: data.selectedSchedule ?? new Date(),
        deliveryOptionsId: data.deliveryOptionsId,
        documentPaymentId: documentPayment.id,
        address: data.address,
        additionalAddress: data.additionalAddress,
        longitude: data.longitude?.toString() ?? null,
        latitude: data.latitude?.toString() ?? null
      }
    });
    const createdDocumentSelected = await prisma.documentSelected.createMany({
      data: orderDocument.map((document) => ({
        ...document,
        userId: findUser.userId,
        requestDocumentsId: createdRequest.id
      }))
    });
    console.log(createdDocumentSelected);
    return createdDocumentSelected;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
