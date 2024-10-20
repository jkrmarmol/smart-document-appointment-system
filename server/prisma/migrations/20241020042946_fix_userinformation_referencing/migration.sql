-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RequestDocumentsStatus" AS ENUM ('PENDING', 'PROCESSING', 'READYTOPICKUP', 'DELIVERED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInformation" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "middleName" TEXT,
    "lastName" TEXT,
    "studentNo" TEXT,
    "specialOrder" TEXT,
    "lrn" TEXT,
    "address" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documents" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "dayBeforeRelease" INTEGER NOT NULL DEFAULT 3,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeliveryOptions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeliveryOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentOptions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentPayment" (
    "id" TEXT NOT NULL,
    "paymentOptionsId" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequestDocuments" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "selectedSchedule" TIMESTAMP(3) NOT NULL,
    "deliveryOptionsId" TEXT,
    "paymentOptionsId" TEXT,
    "status" "RequestDocumentsStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RequestDocuments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserInformation_userId_key" ON "UserInformation"("userId");

-- AddForeignKey
ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentPayment" ADD CONSTRAINT "DocumentPayment_paymentOptionsId_fkey" FOREIGN KEY ("paymentOptionsId") REFERENCES "PaymentOptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestDocuments" ADD CONSTRAINT "RequestDocuments_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Documents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestDocuments" ADD CONSTRAINT "RequestDocuments_deliveryOptionsId_fkey" FOREIGN KEY ("deliveryOptionsId") REFERENCES "DeliveryOptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequestDocuments" ADD CONSTRAINT "RequestDocuments_paymentOptionsId_fkey" FOREIGN KEY ("paymentOptionsId") REFERENCES "PaymentOptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
