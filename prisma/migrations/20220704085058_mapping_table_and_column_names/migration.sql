/*
  Warnings:

  - You are about to drop the `Classification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Classification";

-- CreateTable
CREATE TABLE "classifications" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "classifications_pkey" PRIMARY KEY ("id")
);
