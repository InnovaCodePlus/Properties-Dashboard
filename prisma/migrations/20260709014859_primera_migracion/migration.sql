-- CreateEnum
CREATE TYPE "PropertyState" AS ENUM ('Disponible', 'Inactivo', 'Ocupado', 'Reservado', 'Matenimiento');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('Departamento', 'Suite', 'Casa');

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "rooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "squareMeters" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "state" "PropertyState" NOT NULL,
    "type" "PropertyType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Property_codigo_key" ON "Property"("codigo");
