'use server';
import { prisma } from './prisma';

export async function fetchStudentNumber(studentNo: string) {
  const studentNumber = await prisma.userInformation.findFirst({
    where: {
      studentNo: studentNo
    }
  });
  return studentNumber;
}
